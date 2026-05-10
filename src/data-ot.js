// Old Testament dataset — comprehensive figures from Genesis through Malachi.
// Layout flows top-to-bottom chronologically toward Christ at the bottom.
// z = depth (0.5 far → 1.5 near) for the 3D galaxy effect.

export const NODE_TYPES_OT = {
  jesus:       { color: '#F36B21', label: 'Christ (foreshadowed)', glow: true,  r: 24 },
  primeval:    { color: '#7A8F5C', label: 'Pre-Patriarchs',         r: 14 },
  patriarch:   { color: '#9BAA7C', label: 'Patriarchs',             r: 14 },
  matriarch:   { color: '#C97A5A', label: 'Matriarchs',             r: 13 },
  exodus:      { color: '#C07840', label: 'Exodus / Wilderness',    r: 14 },
  conquest:    { color: '#A88A55', label: 'Conquest / Judges',      r: 13 },
  king:        { color: '#A8453A', label: 'Kings',                  r: 14 },
  prophet:     { color: '#98B8C5', label: 'Prophets',               r: 14 },
  wisdom:      { color: '#6B9AA5', label: 'Wisdom',                 r: 13 },
  exile:       { color: '#5A7A8E', label: 'Exile / Return',         r: 13 },
  woman:       { color: '#F7C995', label: 'Women of Faith',         r: 13 },
  enemy:       { color: '#6E6058', label: 'Adversary',              r: 13 },
}

export const REL_STYLES_OT = {
  lineage:   { stroke: '#F36B21', width: 2.5, dash: null,  label: 'Lineage' },
  married:   { stroke: '#C97A5A', width: 2,   dash: null,  label: 'Married' },
  sibling:   { stroke: '#7A8FA0', width: 2,   dash: '6,3', label: 'Sibling' },
  parent:    { stroke: '#F7C995', width: 2,   dash: null,  label: 'Parent / Child' },
  mentor:    { stroke: '#9CB48A', width: 2,   dash: '4,3', label: 'Mentor / Successor' },
  prophet_to:{ stroke: '#A8453A', width: 2,   dash: '8,5', label: 'Prophet to King' },
  type:      { stroke: '#C07840', width: 2,   dash: '4,4', label: 'Type / Foreshadow → Christ' },
  prophecy:  { stroke: '#CC4444', width: 2,   dash: '8,5', label: 'Prophecy → Christ' },
  enemy:     { stroke: '#6E6058', width: 2,   dash: '5,5', label: 'Enemy / Conflict' },
  alliance:  { stroke: '#6B9AA5', width: 2,   dash: '6,4', label: 'Alliance / Companion' },
  covenant:  { stroke: '#98B8C5', width: 2.5, dash: null,  label: 'Covenant' },
}

// Helper: deterministic z based on id hash
const zFor = (id) => {
  let h = 0
  for (let i = 0; i < id.length; i++) h = ((h << 5) - h + id.charCodeAt(i)) | 0
  return 0.7 + ((Math.abs(h) % 1000) / 1000) * 0.6  // 0.7 to 1.3
}

const N = (id, label, sub, type, x, y, opts={}) => ({
  id, label, sub, type, x, y, z: opts.z ?? zFor(id),
})

export const NODES_OT = [
  // ── Pre-patriarchs ──────────────────────────────────────────────────
  N('adam',    'Adam',       'First man / federal head',           'primeval',  1100,  60),
  N('eve',     'Eve',         'Mother of all living',                'primeval',  1260,  60),
  N('cain',    'Cain',        'First murderer',                      'primeval',  900,  170),
  N('abel',    'Abel',        'Acceptable sacrifice',                'primeval', 1080, 170),
  N('seth',    'Seth',        'Appointed in place of Abel',          'primeval', 1260, 170),
  N('enoch',   'Enoch',       'Walked with God; taken',              'primeval', 1420, 280),
  N('methuselah','Methuselah','Longest life recorded',               'primeval', 1580, 280),
  N('noah',    'Noah',        'Ark / covenant of preservation',      'primeval', 1300, 380),
  N('shem',    'Shem',        'Father of Semitic peoples',           'primeval', 1300, 480),
  N('ham',     'Ham',         'Son of Noah',                          'primeval', 1450, 480),
  N('japheth', 'Japheth',     'Son of Noah',                          'primeval', 1150, 480),

  // ── Patriarchs / Matriarchs ─────────────────────────────────────────
  N('abraham', 'Abraham',     'Father of faith',                      'patriarch', 700, 480),
  N('sarah',   'Sarah',       'Mother of nations',                    'matriarch', 540, 480),
  N('hagar',   'Hagar',       'Mother of Ishmael',                    'woman',     400, 580),
  N('ishmael', 'Ishmael',     'God hears',                            'patriarch', 400, 700),
  N('lot',     'Lot',         'Nephew of Abraham',                    'patriarch', 860, 480),
  N('isaac',   'Isaac',       'Son of promise; bound on Moriah',      'patriarch', 700, 620),
  N('rebekah', 'Rebekah',     'Bride from afar',                      'matriarch', 540, 620),
  N('esau',    'Esau',        'Sold his birthright',                  'patriarch', 540, 760),
  N('jacob',   'Jacob (Israel)','Wrestled with God; 12 sons',         'patriarch', 700, 760),
  N('rachel',  'Rachel',      'Beloved wife of Jacob',                'matriarch', 880, 800),
  N('leah',    'Leah',        'Mother of Judah',                      'matriarch', 880, 880),
  N('judah',   'Judah',       'Royal tribe; lion',                    'patriarch', 700, 900),
  N('joseph_ot','Joseph',     'Coat of many colors; Pharaoh\'s right hand','patriarch', 1040, 900),
  N('tamar',   'Tamar',       'Mother of Perez',                       'woman',     540, 900),
  N('benjamin','Benjamin',    'Youngest son of Jacob',                 'patriarch', 1200, 900),

  // ── Exodus / Wilderness ─────────────────────────────────────────────
  N('jochebed','Jochebed',    'Mother of Moses, Aaron, Miriam',        'woman',     280, 1020),
  N('amram',   'Amram',       'Father of Moses',                       'patriarch', 280, 1100),
  N('miriam',  'Miriam',      'Prophetess; sister of Moses',           'woman',     180, 1180),
  N('aaron',   'Aaron',       'First high priest; brother of Moses',   'exodus',    320, 1180),
  N('moses',   'Moses',       'Lawgiver / mediator',                   'exodus',    470, 1180),
  N('zipporah','Zipporah',    'Wife of Moses',                         'woman',     620, 1180),
  N('jethro',  'Jethro',      'Priest of Midian; Moses\' father-in-law','exodus',    760, 1180),
  N('pharaoh_ex','Pharaoh',   'Of the Exodus — hardened heart',         'enemy',     180, 1280),
  N('caleb',   'Caleb',       'Wholeheartedly followed God',           'conquest',  900, 1280),
  N('joshua',  'Joshua',      'Successor of Moses; conquered Canaan',  'conquest', 1060, 1280),
  N('rahab',   'Rahab',       'Faith in Jericho; ancestor of Christ',  'woman',    1220, 1280),

  // ── Judges era ──────────────────────────────────────────────────────
  N('deborah', 'Deborah',     'Judge / prophetess',                    'conquest',  280, 1380),
  N('barak',   'Barak',       'Defeated Sisera',                       'conquest',  440, 1380),
  N('gideon',  'Gideon',      'The fleece; 300 men',                   'conquest',  600, 1380),
  N('samson',  'Samson',      'Nazirite of strength',                  'conquest',  760, 1380),
  N('delilah', 'Delilah',     'Betrayed Samson',                       'enemy',     920, 1380),
  N('ruth',    'Ruth',        'Moabite; great-grandmother of David',   'woman',    1080, 1380),
  N('boaz',    'Boaz',        'Kinsman-redeemer',                      'patriarch',1240, 1380),

  // ── Prophets / Kings (early monarchy) ───────────────────────────────
  N('hannah',  'Hannah',      'Prayed Samuel into the world',          'woman',     280, 1480),
  N('elkanah', 'Elkanah',     'Father of Samuel',                      'patriarch', 280, 1560),
  N('samuel',  'Samuel',      'Last judge / first prophet of the kings','prophet',  440, 1480),
  N('saul',    'Saul',        'Israel\'s first king',                   'king',      620, 1480),
  N('jonathan','Jonathan',    'Friend of David; son of Saul',          'king',      780, 1480),
  N('jesse',   'Jesse',       'Father of David',                       'patriarch', 940, 1480),
  N('david',   'David',       'King after God\'s own heart',           'king',     1100, 1480),
  N('bathsheba','Bathsheba',  'Mother of Solomon',                     'matriarch', 940, 1560),
  N('nathan',  'Nathan',      'Prophet to David',                      'prophet',  1260, 1480),
  N('solomon', 'Solomon',     'Wisdom; built the Temple',              'king',     1100, 1600),
  N('queen_sheba','Queen of Sheba','Sought wisdom; greater than Solomon is here','exile',1260, 1600),

  // ── Divided kingdom ─────────────────────────────────────────────────
  N('rehoboam','Rehoboam',    'Split the kingdom (Judah)',             'king',     1100, 1720),
  N('jeroboam','Jeroboam',    'First king of the North; golden calves','king',      940, 1720),
  N('ahab',    'Ahab',        'Wicked king of Israel',                 'king',      780, 1720),
  N('jezebel', 'Jezebel',     'Promoted Baal; opposed Elijah',         'enemy',     620, 1720),
  N('elijah',  'Elijah',      'Fire on Carmel; taken in a whirlwind',  'prophet',   460, 1720),
  N('elisha',  'Elisha',      'Double portion; many miracles',          'prophet',   300, 1720),
  N('hezekiah','Hezekiah',    'Trusted the LORD; Jerusalem spared',    'king',     1260, 1720),
  N('manasseh','Manasseh',    'Wickedest king; repented',              'king',     1420, 1720),
  N('josiah',  'Josiah',      'Reformer; rediscovered the Law',        'king',     1580, 1720),

  // ── Writing prophets ────────────────────────────────────────────────
  N('jonah',   'Jonah',       'Three days in the fish; sign of Christ','prophet',   180, 1820),
  N('amos',    'Amos',        'Justice rolling down like waters',      'prophet',   340, 1820),
  N('hosea',   'Hosea',       'Loved an unfaithful bride',             'prophet',   500, 1820),
  N('isaiah',  'Isaiah',      'Suffering servant; Immanuel',           'prophet',   660, 1820),
  N('micah',   'Micah',       'Bethlehem prophecy',                    'prophet',   820, 1820),
  N('jeremiah','Jeremiah',    'New Covenant promised',                 'prophet',   980, 1820),
  N('habakkuk','Habakkuk',    'The righteous shall live by faith',     'prophet',  1140, 1820),
  N('joel',    'Joel',        'Spirit poured on all flesh',            'prophet',  1300, 1820),
  N('zephaniah','Zephaniah',  'Day of the LORD',                       'prophet',  1460, 1820),
  N('zechariah_p','Zechariah','Triumphal entry; 30 silver',            'prophet',  1620, 1820),
  N('malachi', 'Malachi',     'Sun of righteousness',                  'prophet',  1780, 1820),
  N('ezekiel', 'Ezekiel',     'Dry bones; new heart',                  'prophet',  1940, 1820),

  // ── Exile / Return ──────────────────────────────────────────────────
  N('daniel',  'Daniel',      'Son of Man vision',                     'exile',     180, 1940),
  N('nebuchadnezzar','Nebuchadnezzar','Great king humbled',            'enemy',     340, 1940),
  N('shadrach','Shadrach',    'In the fiery furnace',                  'exile',     500, 1940),
  N('meshach', 'Meshach',     'In the fiery furnace',                  'exile',     660, 1940),
  N('abednego','Abednego',    'In the fiery furnace',                  'exile',     820, 1940),
  N('esther',  'Esther',      'For such a time as this',               'woman',    1100, 1940),
  N('mordecai','Mordecai',    'Esther\'s cousin / guardian',           'exile',    1260, 1940),
  N('haman',   'Haman',       'Plotted Israel\'s destruction',         'enemy',    1420, 1940),
  N('zerubbabel','Zerubbabel','Rebuilt the Temple',                    'exile',    1580, 1940),
  N('ezra',    'Ezra',        'Restored the Law',                      'exile',    1740, 1940),
  N('nehemiah','Nehemiah',    'Rebuilt the walls',                     'exile',    1900, 1940),

  // ── Wisdom (timeless) ───────────────────────────────────────────────
  N('job',     'Job',         'Suffered righteously; saw God',         'wisdom',   2020, 1100),
  N('melchizedek','Melchizedek','Eternal priesthood',                  'wisdom',    900, 480),

  // ── Christ anchor ───────────────────────────────────────────────────
  N('jesus',   'Jesus Christ', 'The Word made flesh — fulfillment of every promise', 'jesus', 1100, 2200),
]

export const EDGES_OT = [
  // Pre-patriarchs
  { from:'adam', to:'eve', rel:'married', bi:true },
  { from:'adam', to:'cain', rel:'parent', label:'father→son' },
  { from:'adam', to:'abel', rel:'parent', label:'father→son' },
  { from:'adam', to:'seth', rel:'parent', label:'father→son' },
  { from:'eve',  to:'cain', rel:'parent', label:'mother→son' },
  { from:'eve',  to:'abel', rel:'parent', label:'mother→son' },
  { from:'eve',  to:'seth', rel:'parent', label:'mother→son' },
  { from:'cain', to:'abel', rel:'enemy', label:'killed his brother' },
  { from:'cain', to:'abel', rel:'sibling', bi:true },
  { from:'seth', to:'enoch', rel:'lineage', label:'descendant' },
  { from:'enoch',to:'methuselah', rel:'parent', label:'father→son' },
  { from:'methuselah',to:'noah', rel:'lineage', label:'grandfather→grandson' },
  { from:'noah', to:'shem', rel:'parent', label:'father→son' },
  { from:'noah', to:'ham',  rel:'parent', label:'father→son' },
  { from:'noah', to:'japheth', rel:'parent', label:'father→son' },
  { from:'shem', to:'abraham', rel:'lineage', label:'ancestor' },

  // Patriarchs
  { from:'abraham', to:'sarah', rel:'married', bi:true },
  { from:'abraham', to:'hagar', rel:'married', label:'concubine' },
  { from:'abraham', to:'ishmael', rel:'parent', label:'father→son' },
  { from:'hagar',   to:'ishmael', rel:'parent', label:'mother→son' },
  { from:'abraham', to:'lot',   rel:'lineage', label:'uncle' },
  { from:'abraham', to:'isaac', rel:'parent', label:'father→son of promise' },
  { from:'sarah',   to:'isaac', rel:'parent', label:'mother→son' },
  { from:'isaac',   to:'rebekah', rel:'married', bi:true },
  { from:'isaac',   to:'esau',  rel:'parent', label:'father→son' },
  { from:'isaac',   to:'jacob', rel:'parent', label:'father→son' },
  { from:'rebekah', to:'esau',  rel:'parent', label:'mother→son' },
  { from:'rebekah', to:'jacob', rel:'parent', label:'mother→son' },
  { from:'esau',    to:'jacob', rel:'sibling', bi:true, label:'twins' },
  { from:'jacob',   to:'rachel', rel:'married', bi:true, label:'beloved' },
  { from:'jacob',   to:'leah',   rel:'married', bi:true },
  { from:'jacob',   to:'judah',  rel:'parent', label:'father→son' },
  { from:'leah',    to:'judah',  rel:'parent', label:'mother→son' },
  { from:'jacob',   to:'joseph_ot', rel:'parent', label:'father→son' },
  { from:'rachel',  to:'joseph_ot', rel:'parent', label:'mother→son' },
  { from:'jacob',   to:'benjamin',  rel:'parent', label:'father→son' },
  { from:'rachel',  to:'benjamin',  rel:'parent', label:'mother→son' },
  { from:'judah',   to:'tamar', rel:'married', label:'levirate' },

  // Covenant lines
  { from:'abraham', to:'isaac', rel:'covenant', label:'covenant heir' },
  { from:'isaac',   to:'jacob', rel:'covenant', label:'covenant heir' },
  { from:'jacob',   to:'judah', rel:'covenant', label:'royal line — Gen 49' },

  // Melchizedek
  { from:'melchizedek', to:'abraham', rel:'alliance', label:'blessed Abraham' },

  // Exodus family
  { from:'amram',   to:'jochebed', rel:'married', bi:true },
  { from:'jochebed',to:'moses', rel:'parent', label:'mother→son' },
  { from:'jochebed',to:'aaron', rel:'parent', label:'mother→son' },
  { from:'jochebed',to:'miriam',rel:'parent', label:'mother→daughter' },
  { from:'amram',   to:'moses', rel:'parent', label:'father→son' },
  { from:'moses',   to:'aaron', rel:'sibling', bi:true },
  { from:'moses',   to:'miriam',rel:'sibling', bi:true },
  { from:'jethro',  to:'zipporah', rel:'parent', label:'father→daughter' },
  { from:'moses',   to:'zipporah', rel:'married', bi:true },
  { from:'jethro',  to:'moses', rel:'mentor', label:'wise counsel' },
  { from:'moses',   to:'pharaoh_ex', rel:'enemy', label:'let My people go' },
  { from:'moses',   to:'joshua', rel:'mentor', label:'successor' },
  { from:'moses',   to:'caleb',  rel:'mentor', label:'faithful spy' },
  { from:'joshua',  to:'rahab', rel:'alliance', label:'spared in Jericho' },
  { from:'rahab',   to:'boaz',  rel:'parent', label:'mother→son' },

  // Judges
  { from:'deborah', to:'barak', rel:'mentor', label:'commissioned' },
  { from:'samson',  to:'delilah', rel:'enemy', label:'betrayed' },
  { from:'boaz',    to:'ruth',  rel:'married', bi:true, label:'kinsman-redeemer' },
  { from:'boaz',    to:'jesse', rel:'lineage', label:'great-grandfather' },
  { from:'ruth',    to:'jesse', rel:'lineage', label:'great-grandmother' },
  { from:'jesse',   to:'david', rel:'parent', label:'father→son' },

  // Samuel / kingdom
  { from:'elkanah', to:'hannah',rel:'married', bi:true },
  { from:'hannah',  to:'samuel',rel:'parent', label:'mother→son' },
  { from:'samuel',  to:'saul',  rel:'prophet_to', label:'anointed first king' },
  { from:'samuel',  to:'david', rel:'prophet_to', label:'anointed in Jesse\'s house' },
  { from:'saul',    to:'jonathan', rel:'parent', label:'father→son' },
  { from:'saul',    to:'david', rel:'enemy', label:'pursued his life' },
  { from:'jonathan',to:'david', rel:'alliance', label:'covenant of friendship' },
  { from:'david',   to:'bathsheba', rel:'married', bi:true },
  { from:'nathan',  to:'david', rel:'prophet_to', label:'you are the man (2 Sam 12)' },
  { from:'nathan',  to:'david', rel:'prophet_to', label:'2 Sam 7 — eternal throne' },
  { from:'david',   to:'solomon', rel:'parent', label:'father→son' },
  { from:'bathsheba',to:'solomon',rel:'parent', label:'mother→son' },
  { from:'queen_sheba',to:'solomon',rel:'alliance', label:'sought wisdom' },

  // Divided kingdom
  { from:'solomon', to:'rehoboam', rel:'parent', label:'father→son' },
  { from:'solomon', to:'jeroboam', rel:'enemy', label:'rival rises' },
  { from:'rehoboam',to:'jeroboam', rel:'enemy', label:'kingdom split (1 Kgs 12)' },
  { from:'ahab',    to:'jezebel',  rel:'married', bi:true },
  { from:'elijah',  to:'ahab',     rel:'prophet_to', label:'confronted on Carmel' },
  { from:'elijah',  to:'jezebel',  rel:'enemy', label:'fled her threats' },
  { from:'elijah',  to:'elisha',   rel:'mentor', label:'mantle / double portion' },
  { from:'hezekiah',to:'isaiah',   rel:'alliance', label:'received the prophet' },
  { from:'isaiah',  to:'hezekiah', rel:'prophet_to', label:'Jerusalem spared' },
  { from:'manasseh',to:'josiah',   rel:'lineage', label:'grandfather' },
  { from:'josiah',  to:'jeremiah', rel:'alliance', label:'rediscovered the Law' },

  // Prophets to Christ
  { from:'isaiah',     to:'jesus', rel:'prophecy', label:'Immanuel / Suffering Servant' },
  { from:'micah',      to:'jesus', rel:'prophecy', label:'born in Bethlehem' },
  { from:'jeremiah',   to:'jesus', rel:'prophecy', label:'New Covenant 31:31' },
  { from:'zechariah_p',to:'jesus', rel:'prophecy', label:'humble king / 30 silver' },
  { from:'malachi',    to:'jesus', rel:'prophecy', label:'sun of righteousness' },
  { from:'daniel',     to:'jesus', rel:'prophecy', label:'Son of Man (Dan 7)' },
  { from:'hosea',      to:'jesus', rel:'prophecy', label:'out of Egypt I called my Son' },
  { from:'joel',       to:'jesus', rel:'prophecy', label:'Spirit poured out (Acts 2)' },
  { from:'ezekiel',    to:'jesus', rel:'prophecy', label:'one Shepherd / new heart' },
  { from:'jonah',      to:'jesus', rel:'type', label:'three days in the fish' },
  { from:'habakkuk',   to:'jesus', rel:'prophecy', label:'righteous live by faith' },

  // Types pointing to Christ
  { from:'adam',       to:'jesus', rel:'type', label:'second Adam' },
  { from:'abel',       to:'jesus', rel:'type', label:'righteous blood' },
  { from:'noah',       to:'jesus', rel:'type', label:'ark of salvation' },
  { from:'isaac',      to:'jesus', rel:'type', label:'beloved son offered' },
  { from:'joseph_ot',  to:'jesus', rel:'type', label:'betrayed → exalted → saves' },
  { from:'moses',      to:'jesus', rel:'type', label:'prophet like me (Deut 18)' },
  { from:'aaron',      to:'jesus', rel:'type', label:'high priest' },
  { from:'joshua',     to:'jesus', rel:'type', label:'leads into rest (Heb 4)' },
  { from:'david',      to:'jesus', rel:'type', label:'Son of David / Ps 22, 110' },
  { from:'solomon',    to:'jesus', rel:'type', label:'temple builder / wisdom' },
  { from:'jonah',      to:'jesus', rel:'type', label:'Mt 12:40' },
  { from:'melchizedek',to:'jesus', rel:'type', label:'eternal priesthood (Heb 7)' },
  { from:'samson',     to:'jesus', rel:'type', label:'death that defeats' },
  { from:'boaz',       to:'jesus', rel:'type', label:'kinsman-redeemer' },
  { from:'job',        to:'jesus', rel:'type', label:'I know my Redeemer lives (Job 19:25)' },

  // Daniel / fiery furnace
  { from:'daniel',  to:'shadrach', rel:'alliance', bi:true },
  { from:'daniel',  to:'meshach',  rel:'alliance', bi:true },
  { from:'daniel',  to:'abednego', rel:'alliance', bi:true },
  { from:'shadrach',to:'meshach',  rel:'alliance', bi:true },
  { from:'shadrach',to:'abednego', rel:'alliance', bi:true },
  { from:'meshach', to:'abednego', rel:'alliance', bi:true },
  { from:'nebuchadnezzar', to:'daniel', rel:'enemy', label:'great king vs. exile' },
  { from:'nebuchadnezzar', to:'shadrach', rel:'enemy' },

  // Esther
  { from:'mordecai',to:'esther', rel:'lineage', label:'cousin / guardian' },
  { from:'haman',   to:'mordecai', rel:'enemy', label:'plotted destruction' },
  { from:'esther',  to:'haman',  rel:'enemy', label:'exposed the plot' },

  // Return
  { from:'zerubbabel',to:'ezra', rel:'alliance', label:'rebuild generation' },
  { from:'ezra',     to:'nehemiah', rel:'alliance', label:'walls + Word' },
  { from:'jesus',    to:'zerubbabel', rel:'lineage', label:'in the genealogies' },
]
