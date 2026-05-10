import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { NODES, EDGES, NODE_TYPES, REL_STYLES } from './data.js'

const STAGE_W = 2200
const STAGE_H = 2400
const MIN_SCALE = 0.2
const MAX_SCALE = 3

export default function App() {
  const containerRef = useRef(null)
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.5 })
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [activeFilters, setActiveFilters] = useState(new Set())
  const [legendOpen, setLegendOpen] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth > 720 : true
  )

  const dragRef = useRef({ active: false, lastX: 0, lastY: 0, moved: false, pointerId: null })
  const pointersRef = useRef(new Map())
  const pinchRef = useRef(null)

  // Initial fit: center on Jesus
  useEffect(() => {
    if (!containerRef.current) return
    const { clientWidth, clientHeight } = containerRef.current
    const scale = Math.min(clientWidth / STAGE_W, clientHeight / STAGE_H) * 0.95
    const jesus = NODES.find(n => n.id === 'jesus')
    setTransform({
      x: clientWidth / 2 - jesus.x * scale,
      y: clientHeight / 2 - jesus.y * scale,
      scale,
    })
  }, [])

  const onPointerDown = (e) => {
    if (e.target.closest('[data-node]')) return // node clicks handled separately
    const c = containerRef.current
    if (!c) return
    c.setPointerCapture?.(e.pointerId)
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (pointersRef.current.size === 2) {
      const [p1, p2] = Array.from(pointersRef.current.values())
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
      const cx = (p1.x + p2.x) / 2
      const cy = (p1.y + p2.y) / 2
      pinchRef.current = { startDist: dist, startScale: transform.scale, cx, cy }
      dragRef.current.active = false
      return
    }
    dragRef.current = {
      active: true, lastX: e.clientX, lastY: e.clientY, moved: false, pointerId: e.pointerId,
    }
  }
  const onPointerMove = (e) => {
    if (pointersRef.current.has(e.pointerId)) {
      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    }

    // Pinch zoom
    if (pointersRef.current.size === 2 && pinchRef.current) {
      const [p1, p2] = Array.from(pointersRef.current.values())
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
      const c = containerRef.current
      if (!c) return
      const rect = c.getBoundingClientRect()
      const cx = (p1.x + p2.x) / 2 - rect.left
      const cy = (p1.y + p2.y) / 2 - rect.top
      const ratio = dist / pinchRef.current.startDist
      let newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, pinchRef.current.startScale * ratio))
      setTransform(t => {
        const newX = cx - (cx - t.x) * (newScale / t.scale)
        const newY = cy - (cy - t.y) * (newScale / t.scale)
        return { x: newX, y: newY, scale: newScale }
      })
      return
    }

    const d = dragRef.current
    if (!d.active) return
    const dx = e.clientX - d.lastX
    const dy = e.clientY - d.lastY
    if (Math.abs(dx) + Math.abs(dy) > 3) d.moved = true
    d.lastX = e.clientX
    d.lastY = e.clientY
    setTransform(t => ({ ...t, x: t.x + dx, y: t.y + dy }))
  }
  const onPointerUp = (e) => {
    const c = containerRef.current
    pointersRef.current.delete(e.pointerId)
    if (pointersRef.current.size < 2) pinchRef.current = null
    if (c) { try { c.releasePointerCapture(e.pointerId) } catch {} }
    if (dragRef.current.pointerId === e.pointerId) {
      dragRef.current = { active: false, lastX: 0, lastY: 0, moved: false, pointerId: null }
    }
  }

  const onWheel = (e) => {
    e.preventDefault()
    const c = containerRef.current
    if (!c) return
    const rect = c.getBoundingClientRect()
    const cursorX = e.clientX - rect.left
    const cursorY = e.clientY - rect.top
    const oldScale = transform.scale
    const dir = e.deltaY > 0 ? 0.9 : 1.1
    let newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, oldScale * dir))
    if (newScale === oldScale) return
    const newX = cursorX - (cursorX - transform.x) * (newScale / oldScale)
    const newY = cursorY - (cursorY - transform.y) * (newScale / oldScale)
    setTransform({ x: newX, y: newY, scale: newScale })
  }

  // Attach native wheel handler so we can preventDefault (passive issue)
  useEffect(() => {
    const c = containerRef.current
    if (!c) return
    const handler = (e) => onWheel(e)
    c.addEventListener('wheel', handler, { passive: false })
    return () => c.removeEventListener('wheel', handler)
  }, [transform])

  const zoom = (factor) => {
    const c = containerRef.current
    if (!c) return
    const cx = c.clientWidth / 2
    const cy = c.clientHeight / 2
    const oldScale = transform.scale
    let newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, oldScale * factor))
    const newX = cx - (cx - transform.x) * (newScale / oldScale)
    const newY = cy - (cy - transform.y) * (newScale / oldScale)
    setTransform({ x: newX, y: newY, scale: newScale })
  }

  const centerOn = (id) => {
    const n = NODES.find(x => x.id === id)
    if (!n || !containerRef.current) return
    const c = containerRef.current
    const scale = Math.max(transform.scale, 0.7)
    setTransform({
      x: c.clientWidth / 2 - n.x * scale,
      y: c.clientHeight / 2 - n.y * scale,
      scale,
    })
  }

  const reset = () => {
    if (!containerRef.current) return
    const c = containerRef.current
    const scale = Math.min(c.clientWidth / STAGE_W, c.clientHeight / STAGE_H) * 0.95
    const jesus = NODES.find(n => n.id === 'jesus')
    setTransform({
      x: c.clientWidth / 2 - jesus.x * scale,
      y: c.clientHeight / 2 - jesus.y * scale,
      scale,
    })
  }

  // Adjacency
  const adjacency = useMemo(() => {
    const map = {}
    NODES.forEach(n => { map[n.id] = { in: [], out: [], all: [] } })
    EDGES.forEach((e, i) => {
      map[e.from]?.out.push(i)
      map[e.to]?.in.push(i)
      map[e.from]?.all.push(i)
      map[e.to]?.all.push(i)
    })
    return map
  }, [])

  const handleNodeClick = (id) => {
    if (dragRef.current.moved) return
    setSelected(prev => (prev === id ? null : id))
  }

  const toggleFilter = (type) => {
    setActiveFilters(prev => {
      const s = new Set(prev)
      if (s.has(type)) s.delete(type)
      else s.add(type)
      return s
    })
  }

  const isNodeFiltered = (n) => {
    if (activeFilters.size === 0) return false
    return !activeFilters.has(n.type)
  }

  const highlightedNodes = useMemo(() => {
    if (!selected) return null
    const set = new Set([selected])
    adjacency[selected]?.all.forEach(i => {
      const e = EDGES[i]
      set.add(e.from); set.add(e.to)
    })
    return set
  }, [selected, adjacency])

  const highlightedEdges = useMemo(() => {
    if (!selected) return null
    return new Set(adjacency[selected]?.all || [])
  }, [selected, adjacency])

  const nodeMap = useMemo(() => {
    const m = {}; NODES.forEach(n => { m[n.id] = n }); return m
  }, [])

  const filterEntries = Object.entries(NODE_TYPES)

  return (
    <div className="app">
      <div className="topbar">
        <div>
          <div className="title">✦ Roads to Christ — Biblical Lineage Map</div>
          <div className="subtitle">Click any figure to trace their relationship to Jesus.</div>
        </div>
        <div className="pills">
          {filterEntries.map(([key, t]) => (
            <span
              key={key}
              className={`pill ${activeFilters.has(key) ? 'active' : ''}`}
              onClick={() => toggleFilter(key)}
            >
              <span className="dot" style={{ background: t.color }} />
              {t.label}
            </span>
          ))}
          {activeFilters.size > 0 && (
            <span className="pill" onClick={() => setActiveFilters(new Set())}>Clear</span>
          )}
        </div>
      </div>

      <div
        ref={containerRef}
        className={`canvas-wrap ${dragRef.current.active ? 'dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="svg-stage"
          style={{ transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})` }}
        >
          <svg width={STAGE_W} height={STAGE_H} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <defs>
              <radialGradient id="bgGlow" cx="50%" cy="68%" r="50%">
                <stop offset="0%" stopColor="#4a5d6c" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#2f3e4a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="jesusGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F7C995" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#F36B21" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#F36B21" stopOpacity="0" />
              </radialGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            <rect x="0" y="0" width={STAGE_W} height={STAGE_H} fill="url(#bgGlow)" />

            {/* Edges */}
            <g>
              {EDGES.map((e, i) => {
                const a = nodeMap[e.from]; const b = nodeMap[e.to]
                if (!a || !b) return null
                const style = REL_STYLES[e.rel]
                const fadedByFilter =
                  activeFilters.size > 0 && (isNodeFiltered(a) || isNodeFiltered(b))
                const isHighlighted = highlightedEdges?.has(i)
                const dim = (highlightedEdges && !isHighlighted) || fadedByFilter
                const opacity = dim ? 0.08 : 0.85
                const w = isHighlighted ? style.width + 1.5 : style.width
                return (
                  <g key={i} opacity={opacity}>
                    <line
                      x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                      stroke={style.stroke}
                      strokeWidth={w}
                      strokeDasharray={style.dash || undefined}
                      strokeLinecap="round"
                    />
                    {isHighlighted && e.label && (
                      <text
                        className="edge-label"
                        x={(a.x + b.x) / 2}
                        y={(a.y + b.y) / 2 - 6}
                      >
                        {e.label}
                      </text>
                    )}
                  </g>
                )
              })}
            </g>

            {/* Nodes */}
            <g>
              {NODES.map(n => {
                const t = NODE_TYPES[n.type]
                const filteredOut = isNodeFiltered(n)
                const isHl = highlightedNodes?.has(n.id)
                const dim = (highlightedNodes && !isHl) || filteredOut
                const isSel = selected === n.id
                const isHover = hovered === n.id
                const r = t.r * (isSel ? 1.3 : isHover ? 1.15 : 1)
                const opacity = dim ? 0.18 : 1

                return (
                  <g
                    key={n.id}
                    data-node={n.id}
                    transform={`translate(${n.x}, ${n.y})`}
                    opacity={opacity}
                    style={{ cursor: 'pointer' }}
                    onPointerDown={(ev) => ev.stopPropagation()}
                    onClick={(ev) => { ev.stopPropagation(); handleNodeClick(n.id) }}
                    onMouseEnter={() => setHovered(n.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {n.type === 'jesus' && (
                      <circle r={70} fill="url(#jesusGlow)" />
                    )}
                    <circle
                      className="node-circle"
                      r={r}
                      fill={t.color}
                      stroke={isSel ? '#EAE9E6' : '#2f3e4a'}
                      strokeWidth={isSel ? 3 : 2}
                      filter={t.glow ? 'url(#softGlow)' : undefined}
                    />
                    <text className="node-label" y={r + 14}>{n.label}</text>
                    {(isHover || isSel) && n.sub && (
                      <text className="node-sub" y={r + 28}>{n.sub}</text>
                    )}
                  </g>
                )
              })}
            </g>
          </svg>
        </div>

        {/* Zoom controls */}
        <div className="zoom-controls">
          <button className="zoom-btn" onClick={() => zoom(1.2)} title="Zoom in">+</button>
          <button className="zoom-btn" onClick={() => zoom(0.8)} title="Zoom out">−</button>
          <button className="zoom-btn small" onClick={reset} title="Reset view">RST</button>
          <button className="zoom-btn small" onClick={() => centerOn('jesus')} title="Center on Jesus">✦</button>
        </div>

        {/* Legend */}
        <div className={`legend ${legendOpen ? '' : 'collapsed'}`}>
          <div
            className="legend-header"
            onClick={() => setLegendOpen(o => !o)}
            role="button"
            aria-expanded={legendOpen}
          >
            <h4>Legend</h4>
            <span className="legend-collapse" aria-hidden="true">{legendOpen ? '−' : '+'}</span>
          </div>
          {legendOpen && (
            <div className="legend-body">
              <div style={{ marginBottom: 6 }}>
                {Object.entries(NODE_TYPES).map(([k, v]) => (
                  <div className="legend-row" key={k}>
                    <span className="legend-dot" style={{ background: v.color }} />
                    <span>{v.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #5a6b78', paddingTop: 6 }}>
                {Object.entries(REL_STYLES).map(([k, v]) => (
                  <div className="legend-row" key={k}>
                    <svg className="legend-line" width="24" height="6">
                      <line
                        x1="0" y1="3" x2="24" y2="3"
                        stroke={v.stroke} strokeWidth={v.width}
                        strokeDasharray={v.dash || undefined}
                      />
                    </svg>
                    <span>{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info Panel */}
        {selected && nodeMap[selected] && (
          <div className="info-panel">
            <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            <h3>{nodeMap[selected].label}</h3>
            <div className="sub">{nodeMap[selected].sub}</div>
            <div className="conn-section">
              <h4>Connections ({adjacency[selected]?.all.length || 0})</h4>
              {adjacency[selected]?.all.map((idx) => {
                const e = EDGES[idx]
                const otherId = e.from === selected ? e.to : e.from
                const other = nodeMap[otherId]
                const style = REL_STYLES[e.rel]
                if (!other) return null
                return (
                  <span
                    key={idx}
                    className="conn"
                    style={{ borderLeftColor: style.stroke }}
                    onClick={() => { setSelected(otherId); centerOn(otherId) }}
                  >
                    <strong style={{ color: style.stroke }}>{style.label}:</strong>{' '}
                    {other.label}
                    {e.label ? <em style={{ color: '#a89878' }}> — {e.label}</em> : null}
                  </span>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
