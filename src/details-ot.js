// OT-specific details. Falls back to NT DETAILS for shared ids.
import { bgUrl } from './details.js'

export const DETAILS_OT = {
  eve: {
    bio: "The first woman, formed from Adam's side, called 'mother of all living.' Tempted by the serpent, she ate; with her husband she fell — but the very first promise of redemption was spoken over her seed (Gen 3:15).",
    scriptures: [
      { ref: "Genesis 2:18-25", note: "Created from Adam's side" },
      { ref: "Genesis 3:1-20", note: "Tempted, fell, given the protoevangelium" },
      { ref: "1 Timothy 2:13-14", note: "Order of creation" },
    ],
    moments: ["Brought to Adam", "Deceived by the serpent", "Mother of Cain, Abel, and Seth"],
    theme: "Mother of all living; bearer of the promised Seed.",
    deeper: [{ label: "Genesis 2-3", url: bgUrl("Genesis 2-3") }],
  },
  cain: {
    bio: "Firstborn son of Adam and Eve. His offering was rejected; consumed by anger and jealousy, he murdered his brother Abel and was driven east of Eden.",
    scriptures: [
      { ref: "Genesis 4:1-16", note: "First murder; mark of Cain" },
      { ref: "Hebrews 11:4", note: "Abel's better sacrifice" },
      { ref: "1 John 3:12", note: "Not be like Cain" },
    ],
    moments: ["Tiller of the ground", "Killed his brother", "Marked and exiled"],
    theme: "Sin crouches at the door — the heart unmastered.",
    deeper: [{ label: "Genesis 4", url: bgUrl("Genesis 4") }],
  },
  abel: {
    bio: "Younger son of Adam, a keeper of sheep. His sacrifice of the firstborn of his flock was accepted by God; his brother killed him in jealousy. His blood still speaks.",
    scriptures: [
      { ref: "Genesis 4:1-10", note: "First martyr; blood crying from the ground" },
      { ref: "Hebrews 11:4", note: "By faith Abel offered a more acceptable sacrifice" },
      { ref: "Hebrews 12:24", note: "Sprinkled blood that speaks better than Abel's" },
    ],
    moments: ["Offered the firstborn of the flock", "Killed by Cain"],
    theme: "Righteous blood — answered finally at the cross.",
    deeper: [{ label: "Hebrews 11:4", url: bgUrl("Hebrews 11:4") }],
  },
  seth: {
    bio: "Third son of Adam, given as a replacement for Abel. Through Seth's line came Noah, Abraham, David — and ultimately Christ.",
    scriptures: [
      { ref: "Genesis 4:25-26", note: "God has appointed for me another seed" },
      { ref: "Genesis 5:1-32", note: "The line of Seth to Noah" },
      { ref: "Luke 3:38", note: "In the genealogy of Christ" },
    ],
    moments: ["Born after Abel's death", "Father of the line of promise"],
    theme: "God preserves the line — the appointed seed.",
    deeper: [{ label: "Genesis 5", url: bgUrl("Genesis 5") }],
  },
  enoch: {
    bio: "Seventh from Adam. He walked with God, prophesied of coming judgment, and 'was not, for God took him' — taken to heaven without seeing death.",
    scriptures: [
      { ref: "Genesis 5:21-24", note: "Walked with God; God took him" },
      { ref: "Hebrews 11:5", note: "Taken up so as not to see death" },
      { ref: "Jude 14-15", note: "Prophesied of the Lord's coming" },
    ],
    moments: ["Walked with God 300 years", "Taken alive into glory"],
    theme: "A life that pleased God; a window into resurrection hope.",
    deeper: [{ label: "Genesis 5:21-24", url: bgUrl("Genesis 5:21-24") }],
  },
  methuselah: {
    bio: "Grandfather of Noah, who lived 969 years — the longest life in Scripture. Tradition reads his name as 'when he dies, it shall come' — a long mercy before the flood.",
    scriptures: [
      { ref: "Genesis 5:21-27", note: "Lived 969 years" },
    ],
    moments: ["Longest life recorded"],
    theme: "Long-suffering mercy before judgment.",
    deeper: [{ label: "Genesis 5", url: bgUrl("Genesis 5") }],
  },
  shem: {
    bio: "Son of Noah from whom the Semitic peoples descend, including Abraham. The line of promise runs through Shem.",
    scriptures: [
      { ref: "Genesis 9:26-27", note: "Blessed be the LORD, the God of Shem" },
      { ref: "Genesis 11:10-26", note: "Genealogy from Shem to Abraham" },
    ],
    moments: ["Honored his father Noah", "Carried the line to Abraham"],
    theme: "The line narrows toward the promise.",
    deeper: [{ label: "Genesis 9-11", url: bgUrl("Genesis 9-11") }],
  },
  ham:     { bio: "Son of Noah; father of nations including Egypt and Canaan.", scriptures:[{ref:"Genesis 9:18-27", note:"After the flood"}], moments:["After-flood family"], theme:"Nations dispersed.", deeper:[{label:"Genesis 9", url:bgUrl("Genesis 9")}]},
  japheth: { bio: "Son of Noah; father of nations expanding to the coastlands.", scriptures:[{ref:"Genesis 10:2-5", note:"Sons of Japheth"}], moments:["After-flood family"], theme:"May God enlarge Japheth.", deeper:[{label:"Genesis 10", url:bgUrl("Genesis 10")}]},

  hagar: {
    bio: "Egyptian servant of Sarah, given to Abraham as a concubine. Mother of Ishmael. Mistreated and fleeing, she met 'the God who sees,' and was promised her son would become a great nation.",
    scriptures: [
      { ref: "Genesis 16", note: "El Roi — the God who sees me" },
      { ref: "Genesis 21:8-21", note: "Sent away; God provided water" },
      { ref: "Galatians 4:21-31", note: "Allegory of two covenants" },
    ],
    moments: ["Met the angel by the spring", "Cried out for her son in the wilderness"],
    theme: "The God who sees the cast-out.",
    deeper: [{ label: "Genesis 16", url: bgUrl("Genesis 16") }],
  },
  ishmael: {
    bio: "Firstborn son of Abraham through Hagar. Blessed by God as the father of a great people, but not the son of covenant promise.",
    scriptures: [
      { ref: "Genesis 16:11-12", note: "Named by the angel — God hears" },
      { ref: "Genesis 17:20", note: "I will bless him and make him fruitful" },
      { ref: "Genesis 21:17-21", note: "God was with the boy" },
    ],
    moments: ["Born to Hagar", "Cast out", "Father of a great nation"],
    theme: "God hears even those outside the covenant line.",
    deeper: [{ label: "Genesis 21", url: bgUrl("Genesis 21") }],
  },
  lot: {
    bio: "Nephew of Abraham. Chose the well-watered plain near Sodom, lost his wife to looking back, and through painful events fathered Moab and Ammon.",
    scriptures: [
      { ref: "Genesis 13", note: "Chose the plain of Jordan" },
      { ref: "Genesis 19", note: "Spared from Sodom; wife became salt" },
      { ref: "2 Peter 2:7-8", note: "Righteous Lot, vexed by lawless deeds" },
    ],
    moments: ["Captured and rescued", "Spared from Sodom's destruction"],
    theme: "Mercy preserves the righteous, even amid foolish choices.",
    deeper: [{ label: "Genesis 19", url: bgUrl("Genesis 19") }],
  },
  esau: {
    bio: "Firstborn twin of Isaac and Rebekah; sold his birthright to Jacob for a bowl of stew. Father of the Edomites.",
    scriptures: [
      { ref: "Genesis 25:29-34", note: "Sold his birthright" },
      { ref: "Genesis 27", note: "Lost the blessing" },
      { ref: "Hebrews 12:16-17", note: "Profane person; sold his birthright" },
      { ref: "Romans 9:13", note: "Jacob I loved, Esau I hated" },
    ],
    moments: ["Sold his birthright", "Wept for the blessing", "Reconciled with Jacob"],
    theme: "Despising the eternal for the immediate.",
    deeper: [{ label: "Genesis 25-33", url: bgUrl("Genesis 25-33") }],
  },
  rachel: {
    bio: "The beloved wife of Jacob, for whom he served fourteen years. Mother of Joseph and Benjamin; she died giving birth to Benjamin.",
    scriptures: [
      { ref: "Genesis 29-30", note: "Loved and contended for" },
      { ref: "Genesis 35:16-20", note: "Died bearing Benjamin" },
      { ref: "Jeremiah 31:15", note: "Rachel weeping for her children" },
      { ref: "Matthew 2:18", note: "Quoted at the slaughter of the innocents" },
    ],
    moments: ["Met Jacob at the well", "Bore Joseph in old age", "Died near Bethlehem"],
    theme: "Beloved bride; griever of children — voice fulfilled in Jesus' day.",
    deeper: [{ label: "Genesis 29-35", url: bgUrl("Genesis 29-35") }],
  },
  leah: {
    bio: "Less-favored wife of Jacob, given by Laban's deception. Mother of six tribes — including Judah, the royal line of Christ.",
    scriptures: [
      { ref: "Genesis 29:31-35", note: "The LORD saw she was hated; opened her womb" },
      { ref: "Genesis 49:31", note: "Buried in Machpelah with Sarah and Rebekah" },
    ],
    moments: ["Mother of Judah", "Buried in the patriarchal tomb"],
    theme: "Seen by God; mother of the royal tribe.",
    deeper: [{ label: "Genesis 29-30", url: bgUrl("Genesis 29-30") }],
  },
  benjamin: {
    bio: "Youngest son of Jacob, only full brother to Joseph, founder of the tribe that produced Saul, Esther, and the Apostle Paul.",
    scriptures: [
      { ref: "Genesis 35:16-20", note: "Born at Rachel's death" },
      { ref: "Genesis 44", note: "Pleaded for by Judah" },
      { ref: "Philippians 3:5", note: "Paul, of the tribe of Benjamin" },
    ],
    moments: ["Born of Rachel", "Brought to Egypt", "Tribe of Saul, Esther, Paul"],
    theme: "Smallest tribe; outsized importance.",
    deeper: [{ label: "Genesis 44", url: bgUrl("Genesis 44") }],
  },

  // Exodus
  jochebed: {
    bio: "Mother of Miriam, Aaron, and Moses. Hid the infant Moses in a basket on the Nile and saw him preserved in Pharaoh's own house.",
    scriptures: [
      { ref: "Exodus 2:1-10", note: "Hid Moses for three months" },
      { ref: "Exodus 6:20", note: "Mother of Aaron and Moses" },
      { ref: "Hebrews 11:23", note: "By faith Moses was hidden" },
    ],
    moments: ["Hid the basket in the reeds"],
    theme: "Faith stronger than Pharaoh's decree.",
    deeper: [{ label: "Exodus 2", url: bgUrl("Exodus 2") }],
  },
  amram: {
    bio: "Father of Moses, Aaron, and Miriam — a Levite who, with his wife, hid Moses by faith.",
    scriptures: [
      { ref: "Exodus 6:20", note: "Father of Moses" },
    ],
    moments: ["Hid Moses with Jochebed"],
    theme: "Faith of an unknown couple shapes a deliverer.",
    deeper: [{ label: "Exodus 6", url: bgUrl("Exodus 6") }],
  },
  miriam: {
    bio: "Sister of Moses and Aaron; led Israel in song after the Red Sea crossing. Her later jealousy of Moses' authority cost her seven days outside the camp.",
    scriptures: [
      { ref: "Exodus 2:4-8", note: "Watched over baby Moses" },
      { ref: "Exodus 15:20-21", note: "Sang the song of victory" },
      { ref: "Numbers 12", note: "Disciplined for criticizing Moses" },
      { ref: "Micah 6:4", note: "Honored as a leader" },
    ],
    moments: ["Watched the basket", "Led the women in song", "Restored after discipline"],
    theme: "Prophetess; voice of celebration over the sea.",
    deeper: [{ label: "Exodus 15:20-21", url: bgUrl("Exodus 15:20-21") }],
  },
  aaron: {
    bio: "Older brother and spokesman of Moses; first high priest of Israel. He stumbled at the golden calf, but the priesthood named for him pointed forward to Christ our perfect High Priest.",
    scriptures: [
      { ref: "Exodus 4:14-16", note: "Spokesman for Moses" },
      { ref: "Exodus 28-29", note: "Priestly garments and consecration" },
      { ref: "Exodus 32", note: "The golden calf — Aaron's failure" },
      { ref: "Hebrews 5:1-4", note: "Aaronic priesthood" },
      { ref: "Hebrews 7:11", note: "A better priesthood is needed — Christ's" },
    ],
    moments: ["Spoke before Pharaoh", "Made the calf", "Consecrated as priest", "Buried on Mount Hor"],
    theme: "Priest who points to a greater Priest.",
    deeper: [{ label: "Exodus 28", url: bgUrl("Exodus 28") }],
  },
  moses: {
    bio: "Drawn out of the Nile, raised in Pharaoh's house, called from the burning bush. He led Israel out of Egypt, mediated the covenant at Sinai, and shepherded a stiff-necked people for forty years. Greater than every prophet of his age, yet pointing to a Prophet greater still.",
    scriptures: [
      { ref: "Exodus 3", note: "Burning bush — I AM" },
      { ref: "Exodus 12", note: "Passover instituted" },
      { ref: "Exodus 14", note: "Red Sea parted" },
      { ref: "Exodus 20", note: "The Ten Commandments" },
      { ref: "Deuteronomy 18:15-19", note: "A prophet like me — applied to Christ" },
      { ref: "Hebrews 3:1-6", note: "Faithful as a servant; Christ as a Son" },
    ],
    moments: ["Drawn from the Nile", "Burning bush", "Ten plagues", "Sinai covenant", "Tabernacle", "Buried by God on Nebo"],
    theme: "Mediator of the old covenant; type of Christ the perfect Mediator.",
    deeper: [{ label: "Exodus 3", url: bgUrl("Exodus 3") }, { label: "Hebrews 3", url: bgUrl("Hebrews 3") }],
  },
  zipporah: {
    bio: "Daughter of Jethro and wife of Moses. Saved Moses' life on the journey back to Egypt with a swift act of obedience.",
    scriptures: [
      { ref: "Exodus 2:21", note: "Given to Moses by Jethro" },
      { ref: "Exodus 4:24-26", note: "Bridegroom of blood" },
    ],
    moments: ["Met Moses at the well", "Circumcised her son"],
    theme: "Quick obedience preserves the deliverer.",
    deeper: [{ label: "Exodus 2-4", url: bgUrl("Exodus 2-4") }],
  },
  jethro: {
    bio: "Priest of Midian, father-in-law of Moses. Gave wise counsel that established Israel's earliest judicial structure.",
    scriptures: [
      { ref: "Exodus 18", note: "The original org-chart counsel" },
    ],
    moments: ["Welcomed Moses", "Counseled delegated leadership"],
    theme: "Wisdom from outside the line of promise.",
    deeper: [{ label: "Exodus 18", url: bgUrl("Exodus 18") }],
  },
  pharaoh_ex: {
    bio: "The unnamed king of Egypt who refused to let Israel go. His hardened heart unleashed ten plagues, and the Red Sea closed over his army.",
    scriptures: [
      { ref: "Exodus 5-14", note: "I will harden Pharaoh's heart" },
      { ref: "Romans 9:17", note: "I have raised you up for this very purpose" },
    ],
    moments: ["Refused Moses ten times", "Drowned in the Red Sea"],
    theme: "Hardened pride against the living God.",
    deeper: [{ label: "Exodus 5-14", url: bgUrl("Exodus 5-14") }],
  },
  caleb: {
    bio: "One of two faithful spies who said 'we are well able to take the land.' Forty years later, at 85, he claimed his mountain.",
    scriptures: [
      { ref: "Numbers 13-14", note: "Different spirit; followed wholly" },
      { ref: "Joshua 14:6-15", note: "Give me this hill country" },
    ],
    moments: ["Faithful spy", "Took Hebron at 85"],
    theme: "Wholehearted following — finishing strong.",
    deeper: [{ label: "Numbers 13-14", url: bgUrl("Numbers 13-14") }],
  },
  joshua: {
    bio: "Successor of Moses, who led Israel across the Jordan and into the land of promise. His name (Yeshua) is the Hebrew form of 'Jesus' — and Hebrews 4 reads his rest as a foretaste of the rest only Christ provides.",
    scriptures: [
      { ref: "Joshua 1:7-9", note: "Be strong and courageous" },
      { ref: "Joshua 5:13-15", note: "Commander of the LORD's army" },
      { ref: "Joshua 24:14-15", note: "As for me and my house" },
      { ref: "Hebrews 4:8-10", note: "If Joshua had given them rest..." },
    ],
    moments: ["Crossed the Jordan", "Walls of Jericho", "Long day at Gibeon", "Covenant at Shechem"],
    theme: "Leads into rest — pointing to the greater Joshua.",
    deeper: [{ label: "Joshua 1, 24", url: bgUrl("Joshua 1,24") }],
  },

  // Judges
  deborah: {
    bio: "Judge and prophetess who summoned Barak to deliver Israel from Sisera. Her song in Judges 5 is one of the oldest poems in Scripture.",
    scriptures: [
      { ref: "Judges 4-5", note: "Battle and song of Deborah" },
    ],
    moments: ["Held court under the palm", "Sang of Israel's victory"],
    theme: "When men falter, God raises a mother in Israel.",
    deeper: [{ label: "Judges 4-5", url: bgUrl("Judges 4-5") }],
  },
  barak: {
    bio: "Commander summoned by Deborah; defeated Sisera. Listed in the Hebrews 11 hall of faith.",
    scriptures: [
      { ref: "Judges 4-5", note: "If you go with me, I will go" },
      { ref: "Hebrews 11:32", note: "Among the faithful" },
    ],
    moments: ["Defeated Sisera"],
    theme: "Faith that needs a partner is still faith.",
    deeper: [{ label: "Judges 4", url: bgUrl("Judges 4") }],
  },
  gideon: {
    bio: "The least of the smallest tribe, called from threshing wheat in a winepress. With 300 men he routed the Midianites.",
    scriptures: [
      { ref: "Judges 6-8", note: "The fleece; the 300; the trumpets and torches" },
      { ref: "Hebrews 11:32", note: "Faith that conquered kingdoms" },
    ],
    moments: ["Met the angel", "Tested with the fleece", "Reduced to 300"],
    theme: "God uses the weak to shame the strong.",
    deeper: [{ label: "Judges 6-7", url: bgUrl("Judges 6-7") }],
  },
  samson: {
    bio: "Nazirite from birth; gifted with extraordinary strength but ruled by appetite. His final act — pulling down the Philistine temple — points dimly to a greater Deliverer who would die to defeat the enemy.",
    scriptures: [
      { ref: "Judges 13-16", note: "Birth, exploits, and end" },
      { ref: "Hebrews 11:32", note: "Listed by faith" },
    ],
    moments: ["Killed a lion", "Riddle and revenge", "Betrayed by Delilah", "Brought down the temple"],
    theme: "A flawed deliverer whose death defeats the enemy.",
    deeper: [{ label: "Judges 13-16", url: bgUrl("Judges 13-16") }],
  },
  delilah: {
    bio: "Philistine woman who, for silver, persuaded Samson to reveal his secret.",
    scriptures: [
      { ref: "Judges 16:4-21", note: "Pressed him to tell" },
    ],
    moments: ["Bargained with the lords of the Philistines"],
    theme: "Beauty hiring itself to ruin.",
    deeper: [{ label: "Judges 16", url: bgUrl("Judges 16") }],
  },

  // Samuel / kingdom
  hannah: {
    bio: "Barren wife of Elkanah whose tearful prayer was answered with the prophet Samuel. Her song anticipates Mary's Magnificat.",
    scriptures: [
      { ref: "1 Samuel 1", note: "Pouring out her soul to the LORD" },
      { ref: "1 Samuel 2:1-10", note: "The song of Hannah" },
    ],
    moments: ["Prayed in the Temple", "Lent Samuel back to the LORD"],
    theme: "The Lord exalts the lowly — a song before Mary's.",
    deeper: [{ label: "1 Samuel 1-2", url: bgUrl("1 Samuel 1-2") }],
  },
  elkanah: {
    bio: "Husband of Hannah and Peninnah; faithful worshipper at Shiloh.",
    scriptures: [{ ref: "1 Samuel 1", note: "Annual pilgrimage to Shiloh" }],
    moments: ["Gave Hannah a double portion"],
    theme: "Tender love amid the pain of barrenness.",
    deeper: [{ label: "1 Samuel 1", url: bgUrl("1 Samuel 1") }],
  },
  samuel: {
    bio: "Last of the judges and first of the kingmakers, a prophet who anointed both Saul and David. He heard the LORD as a child and walked with Him until death.",
    scriptures: [
      { ref: "1 Samuel 3", note: "Speak, LORD, for your servant hears" },
      { ref: "1 Samuel 9-10", note: "Anointed Saul" },
      { ref: "1 Samuel 16", note: "Anointed David" },
      { ref: "Hebrews 11:32", note: "Among the faithful" },
    ],
    moments: ["Lent to the LORD as a boy", "Anointed kings", "Buried at Ramah"],
    theme: "Prophet of the kings; man of prayer.",
    deeper: [{ label: "1 Samuel 3, 16", url: bgUrl("1 Samuel 3,16") }],
  },
  saul: {
    bio: "First king of Israel — tall, gifted, and tragically self-willed. He chose his own way over the LORD's word, and the kingdom was torn from him.",
    scriptures: [
      { ref: "1 Samuel 9-10", note: "Anointed king" },
      { ref: "1 Samuel 13:13-14", note: "A man after the LORD's own heart sought" },
      { ref: "1 Samuel 15", note: "To obey is better than sacrifice" },
      { ref: "1 Samuel 31", note: "Death on Mount Gilboa" },
    ],
    moments: ["Anointed king", "Disobeyed at Gilgal and Amalek", "Pursued David", "Fell by his own sword"],
    theme: "Outward stature without inward heart.",
    deeper: [{ label: "1 Samuel 9-15", url: bgUrl("1 Samuel 9-15") }],
  },
  jonathan: {
    bio: "Crown prince of Israel who loved David as his own soul, even though their friendship cost him the throne.",
    scriptures: [
      { ref: "1 Samuel 18:1-4", note: "Covenant of friendship" },
      { ref: "1 Samuel 20", note: "Saved David's life" },
      { ref: "2 Samuel 1:25-26", note: "David's lament" },
    ],
    moments: ["Defeated the Philistines at Michmash", "Stripped his robe for David", "Died at Gilboa"],
    theme: "Selfless love that gives up the throne.",
    deeper: [{ label: "1 Samuel 18-20", url: bgUrl("1 Samuel 18-20") }],
  },
  nathan: {
    bio: "Court prophet to David. He delivered the great Davidic Covenant promise (2 Sam 7), then later confronted David's adultery with the parable of the ewe lamb.",
    scriptures: [
      { ref: "2 Samuel 7", note: "Your house and kingdom forever" },
      { ref: "2 Samuel 12", note: "You are the man!" },
      { ref: "1 Kings 1", note: "Secured Solomon's succession" },
    ],
    moments: ["Davidic Covenant", "Confronted David", "Anointed Solomon"],
    theme: "Bold truth in the king's ear.",
    deeper: [{ label: "2 Samuel 7, 12", url: bgUrl("2 Samuel 7,12") }],
  },
  queen_sheba: {
    bio: "A foreign queen who travelled far to test Solomon's wisdom. Jesus said her witness will rise in judgment against an unbelieving generation, because something greater than Solomon is here.",
    scriptures: [
      { ref: "1 Kings 10", note: "The half was not told me" },
      { ref: "Matthew 12:42", note: "Greater than Solomon" },
    ],
    moments: ["Visited Solomon", "Praised the LORD"],
    theme: "Gentile seeker who shames an unbelieving generation.",
    deeper: [{ label: "1 Kings 10", url: bgUrl("1 Kings 10") }],
  },

  // Divided kingdom / kings
  rehoboam: { bio: "Son of Solomon. His harsh response split the kingdom in two.", scriptures:[{ref:"1 Kings 12", note:"My little finger is thicker than my father's loins"}], moments:["Lost ten tribes"], theme:"Pride costs a kingdom.", deeper:[{label:"1 Kings 12", url:bgUrl("1 Kings 12")}]},
  jeroboam: { bio: "First king of the Northern Kingdom. Set up golden calves at Dan and Bethel — a sin that became the template for every northern king's failure.", scriptures:[{ref:"1 Kings 12:25-33", note:"Behold your gods, O Israel"}], moments:["Made golden calves"], theme:"Political idolatry.", deeper:[{label:"1 Kings 12-14", url:bgUrl("1 Kings 12-14")}]},
  ahab: { bio: "Wicked king of Israel; husband of Jezebel; chief target of Elijah's ministry.", scriptures:[{ref:"1 Kings 16:30", note:"Did more evil than all before"}, {ref:"1 Kings 21", note:"Naboth's vineyard"}], moments:["Naboth's vineyard"], theme:"A throne sold to its queen.", deeper:[{label:"1 Kings 21", url:bgUrl("1 Kings 21")}]},
  jezebel: { bio: "Sidonian princess who promoted Baal worship and persecuted the prophets. Her violent end fulfilled Elijah's prophecy.", scriptures:[{ref:"1 Kings 18-19, 21", note:"Persecuted Elijah"}, {ref:"2 Kings 9:30-37", note:"Thrown from the window"}], moments:["Slaughtered prophets"], theme:"Idolatry rooted in the palace.", deeper:[{label:"2 Kings 9", url:bgUrl("2 Kings 9")}]},
  hezekiah: { bio: "Faithful king of Judah; Jerusalem was miraculously delivered from Sennacherib in answer to his prayer. Befriended the prophet Isaiah.", scriptures:[{ref:"2 Kings 18-20", note:"Spread the letter before the LORD"}, {ref:"Isaiah 36-39", note:"Trust in the LORD"}], moments:["Reformed worship", "Jerusalem spared", "15 added years"], theme:"Prayer that moves the hand of God.", deeper:[{label:"2 Kings 19", url:bgUrl("2 Kings 19")}]},
  manasseh: { bio: "Wickedest king of Judah, who repented in Babylonian captivity and was restored — a stunning testament to grace.", scriptures:[{ref:"2 Kings 21", note:"Filled Jerusalem with innocent blood"}, {ref:"2 Chronicles 33:10-13", note:"Humbled himself greatly"}], moments:["Idolatry", "Captivity", "Repentance"], theme:"Grace deeper than the worst sin.", deeper:[{label:"2 Chronicles 33", url:bgUrl("2 Chronicles 33")}]},
  josiah: { bio: "Boy-king of Judah who tore his garments when the lost Book of the Law was found and led the nation in the deepest reform of its history.", scriptures:[{ref:"2 Kings 22-23", note:"Tore his clothes when he heard the Law"}], moments:["Found the Book", "Cleansed the Temple", "Renewed the covenant"], theme:"Reform that begins with hearing the Word.", deeper:[{label:"2 Kings 22", url:bgUrl("2 Kings 22") }]},

  // Writing prophets
  jonah: { bio:"Reluctant prophet who fled from God to Tarshish, was swallowed by a great fish, and finally preached repentance to Nineveh — Israel's most hated enemy.", scriptures:[{ref:"Jonah 1-4", note:"The whole story"}, {ref:"Matthew 12:39-41", note:"Sign of Jonah"}], moments:["Three days in the fish","Revival in Nineveh"], theme:"God's mercy for the outsider; sign of resurrection.", deeper:[{label:"Jonah", url:bgUrl("Jonah") }]},
  amos: { bio:"Shepherd from Tekoa called to prophesy social justice and judgment to the prosperous Northern Kingdom.", scriptures:[{ref:"Amos 5:24", note:"Let justice roll down like waters"}, {ref:"Amos 9:11-15", note:"Restoration of David's tent"}], moments:["Prophesied at Bethel"], theme:"True worship demands justice.", deeper:[{label:"Amos 5", url:bgUrl("Amos 5") }]},
  hosea: { bio:"Prophet commanded to marry an unfaithful wife as a living parable of God's love for adulterous Israel — and to redeem her back at cost.", scriptures:[{ref:"Hosea 1-3", note:"Marriage and redemption"}, {ref:"Hosea 6:6", note:"I desire mercy, not sacrifice"}, {ref:"Hosea 11:1", note:"Out of Egypt I called my son — Mt 2:15"}], moments:["Married Gomer","Redeemed her back"], theme:"Covenant love that pursues the unfaithful.", deeper:[{label:"Hosea 11", url:bgUrl("Hosea 11") }]},
  habakkuk: { bio:"Prophet who took his complaints to God and learned to live by faith under judgment.", scriptures:[{ref:"Habakkuk 2:4", note:"The righteous shall live by faith"}, {ref:"Habakkuk 3:17-19", note:"Yet I will rejoice in the LORD"}], moments:["Wrestled honestly with God"], theme:"Faith holds when nothing else does.", deeper:[{label:"Habakkuk 2-3", url:bgUrl("Habakkuk 2-3") }]},
  joel: { bio:"Prophet of the locust plague and the Day of the LORD; promised the Spirit would be poured out on all flesh — fulfilled at Pentecost.", scriptures:[{ref:"Joel 2:28-32", note:"I will pour out my Spirit"}, {ref:"Acts 2:16-21", note:"Peter cites Joel"}], moments:["Locust judgment"], theme:"Pentecost foreseen.", deeper:[{label:"Joel 2", url:bgUrl("Joel 2") }]},
  zephaniah: { bio:"Prophet during Josiah's reign who proclaimed both judgment and the LORD's joy over His people: 'He will rejoice over you with singing.'", scriptures:[{ref:"Zephaniah 1:14-18", note:"Day of the LORD"}, {ref:"Zephaniah 3:17", note:"Quiet you with His love"}], moments:["Day of the LORD oracle"], theme:"Wrath and singing in the same chapter.", deeper:[{label:"Zephaniah 3", url:bgUrl("Zephaniah 3") }]},
  ezekiel: { bio:"Priest-prophet of the exile whose visions of God's chariot, the dry bones, and the new temple shape biblical eschatology. He promised a new heart and a new Shepherd.", scriptures:[{ref:"Ezekiel 1", note:"The chariot vision"}, {ref:"Ezekiel 36:26-27", note:"A new heart and a new spirit"}, {ref:"Ezekiel 37", note:"Valley of dry bones"}, {ref:"Ezekiel 34:23", note:"One Shepherd — David / Christ"}], moments:["Chariot vision","Dry bones live","New temple vision"], theme:"From dead bones to new hearts; one Shepherd over all.", deeper:[{label:"Ezekiel 37", url:bgUrl("Ezekiel 37") }]},

  // Exile
  nebuchadnezzar: { bio:"King of Babylon who destroyed Solomon's temple, exiled Judah, and was later humbled by God to live as a beast — until he confessed the Most High.", scriptures:[{ref:"Daniel 2-4", note:"Dreams, fiery furnace, humbling"}, {ref:"Daniel 4:34-37", note:"Confessed the King of heaven"}], moments:["Destroyed Jerusalem","Saw the fourth man in the fire","Humbled and restored"], theme:"Even Babylon's king bows to heaven's God.", deeper:[{label:"Daniel 4", url:bgUrl("Daniel 4") }]},
  shadrach: { bio:"Hebrew youth in the fiery furnace.", scriptures:[{ref:"Daniel 3", note:"Even if He does not — we will not bow"}], moments:["In the furnace with the fourth man"], theme:"Faithfulness whether God delivers or not.", deeper:[{label:"Daniel 3", url:bgUrl("Daniel 3") }]},
  meshach: { bio:"Hebrew youth in the fiery furnace.", scriptures:[{ref:"Daniel 3", note:"Walked unburned with the Son of God"}], moments:["In the furnace"], theme:"Christ in the fire.", deeper:[{label:"Daniel 3", url:bgUrl("Daniel 3") }]},
  abednego: { bio:"Hebrew youth in the fiery furnace.", scriptures:[{ref:"Daniel 3", note:"Refused the golden image"}], moments:["In the furnace"], theme:"No idol but the LORD.", deeper:[{label:"Daniel 3", url:bgUrl("Daniel 3") }]},
  esther: { bio:"Jewish orphan who became queen of Persia 'for such a time as this' — and risked her life to save her people from Haman's plot.", scriptures:[{ref:"Esther 4:14", note:"For such a time as this"}, {ref:"Esther 7-9", note:"Haman's plot reversed"}], moments:["Crowned queen","Risked the king's scepter","Saved her people"], theme:"Providence at work even when God's name isn't named.", deeper:[{label:"Esther 4", url:bgUrl("Esther 4") }]},
  mordecai: { bio:"Cousin and guardian of Esther; refused to bow to Haman; honored at the king's command and rose to second only to the king.", scriptures:[{ref:"Esther 2-10", note:"Faithful through the whole story"}], moments:["Refused to bow","Honored before all Persia"], theme:"Quiet faithfulness exalted at the right time.", deeper:[{label:"Esther 6", url:bgUrl("Esther 6") }]},
  haman: { bio:"Agagite official who plotted to wipe out the Jews — and was hanged on his own gallows.", scriptures:[{ref:"Esther 3-7", note:"The plot and the reversal"}], moments:["Built the gallows","Hanged on it himself"], theme:"The schemes of the wicked return on their own head.", deeper:[{label:"Esther 7", url:bgUrl("Esther 7") }]},
  zerubbabel: { bio:"Governor of post-exile Judah who led the rebuilding of the Temple. Listed in both genealogies of Christ.", scriptures:[{ref:"Ezra 3-6", note:"Laid the foundation"}, {ref:"Haggai 2:23", note:"My signet ring"}, {ref:"Matthew 1:12-13", note:"In the line of Christ"}], moments:["Returned from exile","Rebuilt the Temple"], theme:"Continuing the line under Persian rule.", deeper:[{label:"Ezra 3", url:bgUrl("Ezra 3") }]},
  ezra: { bio:"Priest and scribe who set his heart to study, do, and teach the Law of the LORD. Led a second return from Babylon and reformed the post-exile community.", scriptures:[{ref:"Ezra 7:10", note:"Set his heart to study and to do and to teach"}, {ref:"Nehemiah 8", note:"Reading of the Law"}], moments:["Read the Law to all the people"], theme:"Restoration through the Word.", deeper:[{label:"Nehemiah 8", url:bgUrl("Nehemiah 8") }]},
  nehemiah: { bio:"Cupbearer to Artaxerxes who, hearing of Jerusalem's broken walls, prayed, planned, and rebuilt them in 52 days against fierce opposition.", scriptures:[{ref:"Nehemiah 1-6", note:"Prayer, planning, rebuilding"}, {ref:"Nehemiah 6:15-16", note:"Wall finished in 52 days"}], moments:["Prayed in the king's court","Built the walls"], theme:"Prayer-saturated leadership against opposition.", deeper:[{label:"Nehemiah 1-6", url:bgUrl("Nehemiah 1-6") }]},

  // Wisdom
  job: { bio:"A blameless man from the land of Uz, tested by Satan with the loss of children, wealth, and health. He clung to God in the darkness and finally beheld Him face to face.", scriptures:[{ref:"Job 1-2", note:"The wager in heaven"}, {ref:"Job 19:25-27", note:"I know that my Redeemer lives"}, {ref:"Job 38-42", note:"Where were you?"}, {ref:"James 5:11", note:"The steadfastness of Job"}], moments:["Lost everything","Sat in ashes","Saw God","Restored double"], theme:"Faith in the dark — pointing to the Redeemer who lives.", deeper:[{label:"Job 19, 38-42", url:bgUrl("Job 19, 38-42") }]},
}
