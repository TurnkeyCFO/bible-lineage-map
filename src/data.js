// Node and edge data for Biblical lineage map.

export const NODE_TYPES = {
  jesus:    { color: '#FFD700', label: 'Jesus Christ',     glow: true,  r: 24 },
  ancestor: { color: '#5A7A3A', label: 'Ancestor',         r: 14 },
  ot:       { color: '#A06020', label: 'Old Testament',    r: 14 },
  prophet:  { color: '#8B1A2E', label: 'Prophet',          r: 14 },
  family:   { color: '#6B3FAA', label: 'Family',           r: 14 },
  inner:    { color: '#B8860B', label: 'Inner Circle',     r: 16 },
  disciple: { color: '#1B4A8A', label: 'Disciple',         r: 12 },
  women:    { color: '#8B3A5A', label: 'Women w/ Jesus',   r: 13 },
  church:   { color: '#2A6B6B', label: 'Early Church',     r: 13 },
  opponent: { color: '#5A5050', label: 'Opponent',         r: 13 },
  encounter:{ color: '#2A6A5A', label: 'Encounter',        r: 13 },
}

export const REL_STYLES = {
  lineage:  { stroke: '#C9A84C', width: 2.5, dash: null,    label: 'Lineage' },
  blood:    { stroke: '#D4813A', width: 2,   dash: null,    label: 'Blood' },
  prophecy: { stroke: '#CC3344', width: 2,   dash: '8,5',   label: 'Prophecy' },
  type:     { stroke: '#D4A020', width: 2,   dash: '4,4',   label: 'OT Type' },
  disciple: { stroke: '#4A80CC', width: 2,   dash: null,    label: 'Disciple' },
  ministry: { stroke: '#3A9A8A', width: 2,   dash: '6,4',   label: 'Ministry' },
  encounter:{ stroke: '#4AAA7A', width: 2,   dash: '3,5',   label: 'Encounter' },
  married:  { stroke: '#CC6688', width: 2,   dash: null,    label: 'Married' },
  sibling:  { stroke: '#9966CC', width: 2,   dash: '6,3',   label: 'Sibling' },
  enemy:    { stroke: '#887777', width: 2,   dash: '5,5',   label: 'Enemy' },
  apostle:  { stroke: '#5588DD', width: 2,   dash: null,    label: 'Apostle (post-Resurrection)' },
}

export const NODES = [
  // Anchor
  { id: 'jesus', label: 'Jesus Christ', sub: 'The Word made flesh', type: 'jesus', x: 1100, y: 1620 },

  // Ancestors / lineage
  { id: 'adam',     label: 'Adam',     sub: 'First man / federal head', type: 'ancestor', x: 1100, y: 60 },
  { id: 'noah',     label: 'Noah',     sub: 'Ark / covenant of preservation', type: 'ancestor', x: 1300, y: 190 },
  { id: 'abraham',  label: 'Abraham',  sub: 'Father of faith',          type: 'ancestor', x: 700,  y: 190 },
  { id: 'sarah',    label: 'Sarah',    sub: 'Mother of nations',         type: 'ancestor', x: 520,  y: 320 },
  { id: 'isaac',    label: 'Isaac',    sub: 'Son of promise',            type: 'ancestor', x: 700,  y: 320 },
  { id: 'rebekah',  label: 'Rebekah',  sub: 'Wife of Isaac',             type: 'ancestor', x: 520,  y: 450 },
  { id: 'jacob',    label: 'Jacob',    sub: 'Israel — wrestled with God',type: 'ancestor', x: 700,  y: 450 },
  { id: 'judah',    label: 'Judah',    sub: 'Lion / royal tribe',        type: 'ancestor', x: 700,  y: 580 },
  { id: 'tamar',    label: 'Tamar',    sub: 'Mother of Perez',           type: 'ancestor', x: 520,  y: 580 },
  { id: 'joseph_ot',label: 'Joseph',   sub: 'Coat of many colors',       type: 'ot',       x: 940,  y: 580 },
  { id: 'perez',    label: 'Perez',    sub: 'Lineage of Christ',         type: 'ancestor', x: 700,  y: 710 },
  { id: 'rahab',    label: 'Rahab',    sub: 'Faith in Jericho',          type: 'ancestor', x: 520,  y: 710 },
  { id: 'salmon',   label: 'Salmon',   sub: 'Husband of Rahab',          type: 'ancestor', x: 440,  y: 800 },
  { id: 'boaz',     label: 'Boaz',     sub: 'Kinsman-redeemer',          type: 'ancestor', x: 600,  y: 840 },
  { id: 'ruth',     label: 'Ruth',     sub: 'Moabite great-grandmother', type: 'ancestor', x: 440,  y: 930 },
  { id: 'obed',     label: 'Obed',     sub: 'Son of Boaz and Ruth',      type: 'ancestor', x: 600,  y: 960 },
  { id: 'jesse',    label: 'Jesse',    sub: 'Stem of Jesse',             type: 'ancestor', x: 600,  y: 1080 },
  { id: 'david',    label: 'David',    sub: 'King after God’s own heart',type: 'ancestor', x: 600,  y: 1200 },
  { id: 'bathsheba',label: 'Bathsheba',sub: 'Mother of Solomon',         type: 'ancestor', x: 430,  y: 1200 },
  { id: 'solomon',  label: 'Solomon',  sub: 'Wisdom / temple builder',   type: 'ancestor', x: 600,  y: 1320 },

  // Prophets
  { id: 'elijah',     label: 'Elijah',      sub: 'Chariot of fire',           type: 'prophet', x: 1400, y: 300 },
  { id: 'elisha',     label: 'Elisha',      sub: 'Double portion',            type: 'prophet', x: 1560, y: 300 },
  { id: 'isaiah',     label: 'Isaiah',      sub: 'Suffering servant',         type: 'prophet', x: 1560, y: 430 },
  { id: 'melchizedek',label: 'Melchizedek', sub: 'Eternal high priest',       type: 'ot',      x: 1250, y: 430 },
  { id: 'jeremiah',   label: 'Jeremiah',    sub: 'New covenant promised',     type: 'prophet', x: 1720, y: 560 },
  { id: 'micah',      label: 'Micah',       sub: 'Bethlehem prophecy',        type: 'prophet', x: 1560, y: 690 },
  { id: 'zechariah_p',label: 'Zechariah',   sub: '30 pieces of silver',       type: 'prophet', x: 1720, y: 820 },
  { id: 'malachi',    label: 'Malachi',     sub: 'Sun of righteousness',      type: 'prophet', x: 1560, y: 950 },
  { id: 'daniel',     label: 'Daniel',      sub: 'Son of Man vision',         type: 'prophet', x: 1720, y: 1080 },
  { id: 'simeon',     label: 'Simeon',      sub: 'Nunc Dimittis',             type: 'prophet', x: 860,  y: 1440 },
  { id: 'anna',       label: 'Anna',        sub: 'Prophetess of the Temple',  type: 'prophet', x: 700,  y: 1440 },

  // Jesus-era family
  { id: 'zechariah_priest', label: 'Zechariah', sub: 'Priest, father of John', type: 'family', x: 200, y: 1100 },
  { id: 'elizabeth',        label: 'Elizabeth', sub: 'Mary’s relative',         type: 'family', x: 370, y: 1100 },
  { id: 'john_bap',         label: 'John the Baptist', sub: 'Forerunner',       type: 'family', x: 285, y: 1250 },
  { id: 'joseph',           label: 'Joseph',    sub: 'Legal earthly father',     type: 'family', x: 900, y: 1440 },
  { id: 'mary',             label: 'Mary',      sub: 'Theotokos / virgin mother',type: 'family', x: 1100,y: 1440 },

  // Half-brothers
  { id: 'james_br', label: 'James',   sub: 'Brother of the Lord — Epistle of James', type: 'family', x: 1250, y: 1560 },
  { id: 'jude_br',  label: 'Jude',    sub: 'Brother of the Lord — Epistle of Jude',  type: 'family', x: 1420, y: 1560 },

  // Inner circle
  { id: 'peter',   label: 'Peter',     sub: 'The Rock — keys of the kingdom', type: 'inner', x: 700,  y: 1820 },
  { id: 'john_ap', label: 'John',      sub: 'The Beloved disciple',           type: 'inner', x: 920,  y: 1860 },
  { id: 'james_z', label: 'James (Zebedee)', sub: 'Son of Thunder',           type: 'inner', x: 1200, y: 1860 },

  // Twelve
  { id: 'andrew',     label: 'Andrew',     sub: 'First-called',                 type: 'disciple', x: 480,  y: 2020 },
  { id: 'matthew',    label: 'Matthew',    sub: 'Tax collector / Gospel',       type: 'disciple', x: 650,  y: 2060 },
  { id: 'thomas',     label: 'Thomas',     sub: 'My Lord and my God',           type: 'disciple', x: 830,  y: 2100 },
  { id: 'philip',     label: 'Philip',     sub: 'Come and see',                 type: 'disciple', x: 1010, y: 2100 },
  { id: 'bartholomew',label: 'Bartholomew',sub: 'No deceit (Nathanael)',        type: 'disciple', x: 1190, y: 2060 },
  { id: 'simon_z',    label: 'Simon',      sub: 'The Zealot',                   type: 'disciple', x: 1370, y: 2020 },
  { id: 'thaddaeus',  label: 'Thaddaeus',  sub: 'Judas son of James',           type: 'disciple', x: 1530, y: 1980 },
  { id: 'james_a',    label: 'James (Alphaeus)', sub: 'James the Less',         type: 'disciple', x: 1680, y: 1940 },
  { id: 'judas',      label: 'Judas Iscariot', sub: 'The betrayer',             type: 'disciple', x: 1820, y: 1900 },

  // Women & Bethany household
  { id: 'mary_mag',   label: 'Mary Magdalene', sub: 'First resurrection witness', type: 'women', x: 320, y: 1680 },
  { id: 'martha',     label: 'Martha',         sub: 'Bethany hostess',            type: 'women', x: 170, y: 1820 },
  { id: 'mary_beth',  label: 'Mary of Bethany',sub: 'Anointed His feet',          type: 'women', x: 310, y: 1940 },
  { id: 'lazarus',    label: 'Lazarus',        sub: 'Raised from the dead',       type: 'encounter', x: 130, y: 1940 },

  // Early church
  { id: 'paul',       label: 'Paul',     sub: 'Apostle to the Gentiles',     type: 'church', x: 1820, y: 1720 },
  { id: 'stephen',    label: 'Stephen',  sub: 'First martyr',                type: 'church', x: 1960, y: 1820 },
  { id: 'barnabas',   label: 'Barnabas', sub: 'Son of encouragement',        type: 'church', x: 1960, y: 1960 },
  { id: 'nicodemus',  label: 'Nicodemus',sub: 'Born again — John 3',         type: 'church', x: 1820, y: 2060 },
  { id: 'joseph_ar',  label: 'Joseph of Arimathea', sub: 'Burial tomb',      type: 'church', x: 1660, y: 2120 },

  // Opponents
  { id: 'satan',     label: 'Satan',         sub: 'Tempter / accuser',     type: 'opponent', x: 1250, y: 1320 },
  { id: 'herod_g',   label: 'Herod the Great', sub: 'Slaughter of infants',type: 'opponent', x: 1350, y: 1440 },
  { id: 'pilate',    label: 'Pontius Pilate', sub: 'What is truth?',       type: 'opponent', x: 1500, y: 1440 },
  { id: 'caiaphas',  label: 'Caiaphas',       sub: 'High priest',          type: 'opponent', x: 1660, y: 1440 },
]

// Edges. Use rel keys above. Optional `bi: true` flags symmetric edges.
export const EDGES = [
  // Lineage chain
  { from:'adam', to:'abraham', rel:'lineage', label:'ancestor' },
  { from:'abraham', to:'isaac', rel:'lineage', label:'father→son' },
  { from:'sarah', to:'isaac', rel:'lineage', label:'mother→son' },
  { from:'isaac', to:'jacob', rel:'lineage', label:'father→son' },
  { from:'rebekah', to:'jacob', rel:'lineage', label:'mother→son' },
  { from:'jacob', to:'judah', rel:'lineage', label:'father→son' },
  { from:'jacob', to:'joseph_ot', rel:'lineage', label:'father→son' },
  { from:'judah', to:'perez', rel:'lineage', label:'father→son' },
  { from:'tamar', to:'perez', rel:'lineage', label:'mother→son' },
  { from:'perez', to:'boaz', rel:'lineage', label:'ancestor' },
  { from:'rahab', to:'boaz', rel:'lineage', label:'mother→son' },
  { from:'salmon', to:'boaz', rel:'lineage', label:'father→son' },
  { from:'boaz', to:'obed', rel:'lineage', label:'father→son' },
  { from:'ruth', to:'obed', rel:'lineage', label:'mother→son' },
  { from:'obed', to:'jesse', rel:'lineage', label:'father→son' },
  { from:'jesse', to:'david', rel:'lineage', label:'father→son' },
  { from:'david', to:'solomon', rel:'lineage', label:'father→son' },
  { from:'bathsheba', to:'solomon', rel:'lineage', label:'mother→son' },
  { from:'solomon', to:'joseph', rel:'lineage', label:'lineage to Joseph' },
  { from:'joseph', to:'jesus', rel:'lineage', label:'legal father' },
  { from:'mary', to:'jesus', rel:'lineage', label:'virgin birth' },

  // Marriages (bi)
  { from:'abraham', to:'sarah', rel:'married', bi:true },
  { from:'isaac', to:'rebekah', rel:'married', bi:true },
  { from:'salmon', to:'rahab', rel:'married', bi:true },
  { from:'boaz', to:'ruth', rel:'married', label:'kinsman-redeemer', bi:true },
  { from:'david', to:'bathsheba', rel:'married', bi:true },
  { from:'joseph', to:'mary', rel:'married', bi:true },
  { from:'zechariah_priest', to:'elizabeth', rel:'married', bi:true },

  // Blood
  { from:'elizabeth', to:'mary', rel:'blood', label:'relative' },
  { from:'elizabeth', to:'john_bap', rel:'blood', label:'mother→son' },
  { from:'zechariah_priest', to:'john_bap', rel:'blood', label:'father→son' },
  { from:'mary', to:'james_br', rel:'blood', label:'mother→son' },
  { from:'mary', to:'jude_br', rel:'blood', label:'mother→son' },
  { from:'james_br', to:'jude_br', rel:'sibling', label:'brothers', bi:true },
  { from:'peter', to:'andrew', rel:'blood', label:'brothers', bi:true },
  { from:'john_ap', to:'james_z', rel:'blood', label:'brothers', bi:true },
  { from:'martha', to:'mary_beth', rel:'blood', label:'sisters', bi:true },
  { from:'martha', to:'lazarus', rel:'blood', label:'siblings', bi:true },
  { from:'mary_beth', to:'lazarus', rel:'blood', label:'siblings', bi:true },

  // Prophecy
  { from:'isaiah',     to:'jesus', rel:'prophecy', label:'Isa 7:14 / 53 / 61' },
  { from:'micah',      to:'jesus', rel:'prophecy', label:'born in Bethlehem' },
  { from:'jeremiah',   to:'jesus', rel:'prophecy', label:'New Covenant 31:31' },
  { from:'zechariah_p',to:'jesus', rel:'prophecy', label:'triumphal entry / 30 silver' },
  { from:'malachi',    to:'jesus', rel:'prophecy', label:'sun of righteousness' },
  { from:'daniel',     to:'jesus', rel:'prophecy', label:'Son of Man vision' },
  { from:'elijah',     to:'jesus', rel:'prophecy', label:'Transfiguration' },
  { from:'malachi',    to:'john_bap', rel:'prophecy', label:'prepares the way' },

  // Types
  { from:'elisha',     to:'jesus', rel:'type', label:'miracles foreshadow' },
  { from:'melchizedek',to:'jesus', rel:'type', label:'eternal priesthood' },
  { from:'joseph_ot',  to:'jesus', rel:'type', label:'betrayed/exalted/saves' },
  { from:'isaac',      to:'jesus', rel:'type', label:'offered son / substitute' },
  { from:'adam',       to:'jesus', rel:'type', label:'second Adam' },
  { from:'david',      to:'jesus', rel:'type', label:'Son of David / Ps 22,110' },
  { from:'noah',       to:'jesus', rel:'type', label:'ark = salvation' },
  { from:'elijah',     to:'john_bap', rel:'type', label:'spirit of Elijah' },

  // Disciples
  { from:'jesus', to:'peter',      rel:'disciple', label:'The Rock' },
  { from:'jesus', to:'john_ap',    rel:'disciple', label:'Beloved' },
  { from:'jesus', to:'james_z',    rel:'disciple', label:'Son of Thunder' },
  { from:'jesus', to:'andrew',     rel:'disciple', label:'first called' },
  { from:'jesus', to:'matthew',    rel:'disciple', label:'follow me' },
  { from:'jesus', to:'thomas',     rel:'disciple', label:'way truth life' },
  { from:'jesus', to:'philip',     rel:'disciple', label:'follow me' },
  { from:'jesus', to:'bartholomew',rel:'disciple', label:'no deceit' },
  { from:'jesus', to:'simon_z',    rel:'disciple', label:'the zealot' },
  { from:'jesus', to:'thaddaeus',  rel:'disciple', label:'called' },
  { from:'jesus', to:'james_a',    rel:'disciple', label:'called' },
  { from:'jesus', to:'judas',      rel:'disciple', label:'betrayer' },

  // Ministry / encounter
  { from:'john_bap', to:'jesus',    rel:'ministry',  label:'baptized Jesus / Herald' },
  { from:'jesus', to:'mary_mag',    rel:'encounter', label:'cast 7 demons / first resurrection witness' },
  { from:'jesus', to:'martha',      rel:'encounter', label:'I am the resurrection' },
  { from:'jesus', to:'mary_beth',   rel:'encounter', label:'good portion / anointing' },
  { from:'jesus', to:'lazarus',     rel:'encounter', label:'Lazarus, come out!' },
  { from:'simeon', to:'jesus',      rel:'encounter', label:'Nunc Dimittis' },
  { from:'anna',   to:'jesus',      rel:'encounter', label:'prophetess witness' },
  { from:'nicodemus', to:'jesus',   rel:'encounter', label:'born again / John 3:16' },
  { from:'joseph_ar', to:'jesus',   rel:'encounter', label:'buried in his tomb' },
  { from:'james_br', to:'jesus',    rel:'sibling',   label:'half-brother' },
  { from:'jude_br',  to:'jesus',    rel:'sibling',   label:'half-brother' },

  // Opponents
  { from:'herod_g',  to:'jesus', rel:'enemy', label:'slaughter of infants' },
  { from:'pilate',   to:'jesus', rel:'enemy', label:'ordered crucifixion' },
  { from:'caiaphas', to:'jesus', rel:'enemy', label:'blasphemy charge' },
  { from:'satan',    to:'jesus', rel:'enemy', label:'tempted in wilderness' },

  // Church
  { from:'jesus',  to:'paul',     rel:'apostle',  label:'Damascus road' },
  { from:'stephen',to:'paul',     rel:'ministry', label:'Paul watched stoning' },
  { from:'paul',   to:'barnabas', rel:'ministry', label:'missionary partners' },
]
