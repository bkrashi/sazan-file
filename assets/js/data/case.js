/* BEYOND THE BRAND — the Albania case: chapters, timeline, profiles, map.
   Every item carries an evidence type (see sources.js) and source IDs. */
window.BTB = window.BTB || {};

BTB.CHAPTERS = [
  {n:"01",slug:"01-promise",t:"The Promise of Development",q:"What is being proposed for Albania's coast, and what has actually been approved?"},
  {n:"02",slug:"02-ownership",t:"Who Owns Albania's Future?",q:"Who stands behind the investments, and what does the paper trail prove?"},
  {n:"03",slug:"03-environment",t:"The Environmental Cost",q:"What is at stake on a protected coastline, and what evidence exists?"},
  {n:"04",slug:"04-made-in-albania",t:"Made in Albania",q:"Who mines, sews and profits from what Albania exports?"},
  {n:"05",slug:"05-evidence",t:"Follow the Evidence",q:"What can the evidence prove, and what remains unknown?"},
  {n:"06",slug:"06-technology",t:"Can Technology Expose the Truth?",q:"What can satellites, data and digital records actually establish in Albania?"},
  {n:"07",slug:"07-decide",t:"Who Benefits? Who Decides?",q:"Who should decide Albania's future, and how can they be held to account?"}
];

/* ---------- permission ladder: proposals vs approvals vs works ---------- */
BTB.LADDER = {
  steps:["Proposal announced","Strategic-investor status","Protected-area / planning change","Construction permit","Works on site"],
  sazan:[["done","rep","Plans announced in 2024.",["S34"]],["done","rep","Granted by AIDA, 30 Dec 2024; preliminary approval reported Jan 2025.",["S55","S43"]],["rq","rq","No specific change for the island found in the sources reviewed. The island lies in the Karaburun-Sazan marine park area.",["S13"]],["rq","rq","No construction permit found in the sources reviewed.",[]],["none","rq","No construction reported on the island.",[]]],
  zvernec:[["done","rep","Plans announced in 2024.",["S34","S50"]],["rq","rq","Not established in the sources reviewed.",[]],["done","ngo","Law 21/2024 amended the protected-areas regime affecting Vjosa-Narta.",["S50"]],["none","ngo","NGOs report no valid permit was published.",["S50"]],["done","ngo","Road, bridge and clearing by May 2026; suspended June 2026.",["S50","S51"]]]
};

/* ---------- timeline ----------
   lane: land | goods | protest | watch
   proj: S = Sazan Island, Z = Zvërnec, B = both / project as a whole, "" = wider context */
BTB.TIMELINE = [
 {d:"2010-04",lane:"watch",ev:"ngo",proj:"S",t:"Karaburun-Sazan National Marine Park proclaimed",x:"The Council of Ministers creates Albania's first marine national park, covering waters around the Karaburun peninsula and Sazan Island.",s:["S13"]},
 {d:"2016-02",lane:"goods",ev:"ngo",proj:"",t:"Half the shoe and garment workers interviewed were underpaid",x:"A study of 52 workers in four Albanian factories found about half were not paid the legal minimum wage, plus unpaid overtime and mistreatment.",s:["S52","S53"]},
 {d:"2019-07",lane:"watch",ev:"rep",proj:"",t:"SPAK starts work",x:"Albania's independent anti-corruption prosecutor is created under the EU- and US-backed justice reform. It later becomes the country's most trusted institution in polls.",s:["S30"]},
 {d:"2019-10",lane:"goods",ev:"alg",proj:"",t:"Independent miners' union recognised; members say they were dismissed",x:"A Tirana court recognises SMBB, an independent union at the Bulqiza chrome mines. The union says nine miners later lost their jobs over union activity. AlbChrome disputes the union's account.",s:["S44","S45"]},
 {d:"2021-05",lane:"watch",ev:"off",proj:"",t:"US designates former PM Sali Berisha for corruption",x:"The State Department bars the former prime minister and his family from the US for involvement in \"significant corruption\".",s:["S23"]},
 {d:"2023-04",lane:"land",ev:"off",proj:"S",t:"Atlantic Incubation Partners LLC registered in Delaware",x:"The company that later receives strategic-investor status for Sazan is registered (file 7390750). It also files a US trademark application for the word \"SAZAN\".",s:["S03","S04"]},
 {d:"2024-02",lane:"watch",ev:"ngo",proj:"Z",t:"Protected-areas law amended (Law 21/2024)",x:"Amendments to Albania's Law on Protected Areas are passed. Critics say they let the prime minister override existing protections. The Vjosa-Narta landscape, which includes Zvërnec, is affected.",s:["S50"]},
 {d:"2024-03",lane:"land",ev:"rep",proj:"B",t:"Kushner's Albania plans become public",x:"Affinity Partners' plans for Sazan Island and the Zvërnec peninsula are announced. The New York Times quotes businessman Musa Kastrati saying his company would play a role.",s:["S34","S50"]},
 {d:"2024-10",lane:"land",ev:"off",proj:"",t:"Kushner–Alabbar holding company incorporated in Abu Dhabi",x:"Atlantic Eagle Dhabi Partners Holding Ltd is set up as a special-purpose vehicle with Jared Kushner and Mohamed Alabbar as directors. No record found links this company to rights in Albania.",s:["S01"]},
 {d:"2024-12",lane:"land",ev:"rep",proj:"S",t:"Strategic-investor status granted for Sazan",x:"AIDA approves strategic-investor status for the \"Touristic Resort – Sazan Island\" project on 30 December, reportedly without a business plan or feasibility study.",s:["S55","S34"]},
 {d:"2024-12",lane:"land",ev:"off",proj:"",t:"New Kastrati Group company registered",x:"Kastrati Group shpk is registered in Tirana, 100% beneficially owned by Shefqet Kastrati. Reporting links people around the group to Zvërnec land deals; no ownership record links it to the project.",s:["S06","S34"]},
 {d:"2025-01",lane:"land",ev:"rep",proj:"S",t:"Preliminary approval for the Sazan resort",x:"The roughly $1.4bn resort is preliminarily approved, days before the US presidential inauguration. Kushner and the government say the family connection played no role.",s:["S43"]},
 {d:"2025-02",lane:"watch",ev:"alg",proj:"",t:"Tirana's mayor detained in a corruption case",x:"Erion Veliaj is detained. In September 2025 SPAK sends him to trial on 13 charges including passive corruption and money laundering, which he denies. He is not linked to the resort.",s:["S41"]},
 {d:"2025-03",lane:"goods",ev:"rep",proj:"",t:"Bulqiza chrome miners boycott work",x:"Miners stop work for days, demanding higher pay, better conditions and the right to organise.",s:["S46"]},
 {d:"2025-05",lane:"land",ev:"off",proj:"Z",t:"Vlorë land company registered",x:"Albania Land Development shpk is registered in Vlorë. Its beneficial owners on file are two Alkhayyat brothers (50% each); a different local person is the legal shareholder.",s:["S02"]},
 {d:"2026-01",lane:"goods",ev:"off",proj:"",t:"Minimum wage rises to 50,000 lek (about €517)",x:"Still the lowest national minimum wage in Europe.",s:["S20","S21"]},
 {d:"2026-01",lane:"land",ev:"rep",proj:"",t:"A record 12.47 million foreign tourists in 2025",x:"INSTAT reports foreign tourist numbers up 6.6% on 2024, the backdrop to the coastal investment push.",s:["S25"]},
 {d:"2026-02",lane:"watch",ev:"rep",proj:"",t:"Corruption score falls to 39",x:"Transparency International's 2025 index drops Albania from 42 to 39, from 80th to 91st of 180.",s:["S22"]},
 {d:"2026-05",lane:"land",ev:"ngo",proj:"Z",t:"Satellite analysis shows works at Zvërnec without a published permit",x:"A new road, a bridge and clearing are visible by May 2026, with no published environmental impact assessment, public consultation or valid permit.",s:["S50","S51"]},
 {d:"2026-05",lane:"protest",ev:"rep",proj:"Z",t:"Fences go up; the Flamingo movement begins",x:"Barbed-wire fences block beach access at Zvërnec. Residents and environmental groups protest.",s:["S30","S31"]},
 {d:"2026-06",lane:"watch",ev:"rep",proj:"B",t:"SPAK confirms an investigation",x:"On 1 June prosecutors confirm a probe into the 2024 protected-status change, land ownership, contracts without public tenders and the origin of land funds.",s:["S30","S32"]},
 {d:"2026-06",lane:"land",ev:"rep",proj:"Z",t:"Government names Qatari investors for Zvërnec",x:"The government tells AFP the Zvërnec investors are \"the two co-owners of Power International Holding W.L.L from Qatar\". AFP finds no legal trace of \"Sazan Real Estate Development\", the company named as managing the project.",s:["S31"]},
 {d:"2026-06",lane:"watch",ev:"rep",proj:"Z",t:"EU warns of accession consequences",x:"The European Commission warns the works could jeopardise closing the environment chapter (Chapter 27) of Albania's accession talks.",s:["S51","S30"]},
 {d:"2026-06",lane:"protest",ev:"ngo",proj:"Z",t:"Construction suspended; fence removed",x:"After national and international protests, work in the Vjosa delta stops and the perimeter fence comes down. Albanian NGOs boycott environment-ministry consultations until Law 21/2024 is repealed.",s:["S51","S50"]},
 {d:"2026-06",lane:"land",ev:"alg",proj:"Z",t:"Villagers say the land is disputed; accounts reportedly frozen",x:"Villagers tell Reuters the project is on disputed land. A single investigative outlet reports that prosecutors froze Albania Land Development's accounts over allegedly fraudulent titles.",s:["S35","S42"]},
 {d:"2026-06",lane:"watch",ev:"rep",proj:"",t:"US waives the Berisha designation",x:"The State Department confirms waivers for certain 2021 corruption designations, citing a \"compelling national interest\".",s:["S24"]},
 {d:"2026-02",lane:"watch",ev:"off",proj:"",t:"EU narrows its corporate due-diligence law",x:"Directive (EU) 2026/470 limits the CSDDD to companies with more than 5,000 employees and €1.5bn turnover, applying from July 2029.",s:["S69","S70"]},
 {d:"2026-07",lane:"watch",ev:"rep",proj:"",t:"Government says it will abolish the strategic-investment law",x:"Prime Minister Rama announces in Brussels that the 2015 law will be scrapped. A replacement is being drafted; no bill text or vote date has been published.",s:["S28","S29"]},
 {d:"2026-08",lane:"land",ev:"rep",proj:"",t:"State moves to end the Vlorë airport concession",x:"Citing delays and contract breaches, the state begins terminating the concession for the airport inside the Vjosa-Narta Protected Landscape. A separate project from Sazan and Zvërnec.",s:["S15","S16"]},
 {d:"2026-09",lane:"watch",ev:"ngo",proj:"Z",t:"European Parliament sets a deadline",x:"MEPs say repealing the 2024 amendment by the end of 2026 is a prerequisite for progress in accession talks.",s:["S51"]},
 {d:"2026-10",lane:"protest",ev:"rep",proj:"",t:"Students strike; protests spread and turn violent",x:"The student union calls strikes over tuition, jobs and corruption. Hundreds of injuries and arrests are reported in Tirana.",s:["S33","S36","S37"]},
 {d:"2026-10",lane:"protest",ev:"rep",proj:"",t:"Clashes at the Council of Ministers",x:"On 31 October protesters attack the government building. Prime Minister Edi Rama refuses to resign; the next election is due in 2029.",s:["S38","S37"]},
 {d:"2026-11",lane:"protest",ev:"rep",proj:"",t:"Medical students join the protests",x:"On 2 November medical students leave lectures to join. This is the latest entry in this file.",s:["S40"]}
];
BTB.LANES=[{id:"land",t:"Land & money"},{id:"goods",t:"Goods & workers"},{id:"protest",t:"Protest"},{id:"watch",t:"Oversight & rules"}];
BTB.PROJ={S:"Sazan",Z:"Zvërnec",B:"Both"};

/* ---------- Sazan vs Zvërnec ---------- */
BTB.VERSUS = [
 ["Where","An uninhabited former military island at the mouth of the Bay of Vlorë.","A coastal strip between the Narta Lagoon and the Adriatic, inside the Vjosa-Narta protected landscape."],
 ["What is planned","A luxury resort.","A large resort development; reporting describes about 10,000 hotel rooms and villas across the wider project."],
 ["Reported value","About $1.4–1.6bn (figures vary by outlet).","About €4bn, the figure cited by the prime minister."],
 ["Who is linked, on record","Atlantic Incubation Partners LLC holds the strategic-investor status (reported) and filed a \"SAZAN\" trademark (official record).","The government says the investors are the two co-owners of Power International Holding (Qatar). Reporting links the project to Kushner's Affinity Partners."],
 ["Approvals","Strategic-investor status, 30 Dec 2024; preliminary approval, Jan 2025 (reported).","The 2024 amendment to the protected-areas law opened the area; no published permit for works (NGO finding)."],
 ["Environment","Waters home to the Mediterranean monk seal and 36 globally threatened marine species (think-tank briefing).","Wetland with flamingos, monk seals and sea-turtle nesting; works suspended June 2026 (NGO finding)."],
 ["Investigation","SPAK's probe covers the project as a whole.","Focus of SPAK's probe: the protected-status change, land acquisition and land titles."]
];
BTB.VERSUS_SRC=[["S43","S31"],["S31","S34"],["S31","S32"],["S04","S55","S31","S30"],["S55","S43","S50"],["S55","S30","S51"],["S30","S35"]];

/* ---------- profiles ---------- */
BTB.PROFILES = [
 {id:"kushner",k:"Person · investor",n:"Jared Kushner",r:"Founder, Affinity Partners; US special envoy",x:"Listed as a director of Atlantic Eagle Dhabi Partners Holding, an Abu Dhabi holding company co-owned with an Eagle Hills entity. His firm's plans for Sazan and Zvërnec were announced in 2024. He and the Albanian government say his family ties to President Trump played no role.",ev:"off",s:["S01","S34","S43"],q:"Which company holds the Sazan rights inside Albania, and who controls it?"},
 {id:"alabbar",k:"Person · investor",n:"Mohamed Alabbar",r:"Founder, Eagle Hills (UAE)",x:"Co-director with Kushner of the Abu Dhabi holding company. Eagle Hills separately has an agreement to redevelop Durrës port.",ev:"off",s:["S01","S56"],q:"Does the Abu Dhabi company hold any Albanian assets?"},
 {id:"rama",k:"Person · government",n:"Edi Rama",r:"Prime Minister of Albania since 2013",x:"His government amended the protected-areas law and backed the project. Listed as a politically exposed person. Sayari shows no ownership link between him and any project company.",ev:"off",s:["S10","S50","S36"],q:"Who drafted the 2024 amendment, and on whose request?"},
 {id:"alk",k:"People · beneficial owners",n:"The Alkhayyat brothers",r:"Beneficial owners, Albania Land Development",x:"Named in Albania's beneficial-owner register as 50/50 owners of a Vlorë land company. The government's description of the Zvërnec investors (two co-owners of a Qatari holding) fits, but no record links them to Power International Holding.",ev:"off",s:["S02","S31"],q:"Are they the co-owners the government named?"},
 {id:"abehsera",k:"Person · spokesperson",n:"Asher Abehsera",r:"Named chairman of \"Sazan Real Estate Development\"",x:"Quoted in a PR statement provided on behalf of Affinity Partners. AFP could find no legal trace of a company with that name.",ev:"rep",s:["S31"],q:"Is \"Sazan Real Estate Development\" a registered company anywhere?"},
 {id:"kastrati",k:"Person · business",n:"Shefqet Kastrati",r:"Beneficial owner, Kastrati Group",x:"Investigative reporting describes individuals linked to his group in the Zvërnec land network. Musa Kastrati told the NYT in 2024 his company would play a role. No ownership record links the group to the project.",ev:"alg",s:["S06","S34"],q:"What role, if any, does the group play in the land deals?"},
 {id:"aip",k:"Company · investor vehicle",n:"Atlantic Incubation Partners",r:"Three records: Delaware, Florida, Abu Dhabi",x:"Received strategic-investor status for Sazan (reported). Three companies share this name; Sayari does not merge them because they share no identifier.",ev:"unv",s:["S03","S04","S01","S55"],q:"Are the three records the same company?"},
 {id:"pih",k:"Company · investor",n:"Power International Holding",r:"Qatar",x:"Named by the government as the holding whose two co-owners are the Zvërnec investors.",ev:"rep",s:["S31"],q:"What does the holding own in Albania?"},
 {id:"spak",k:"Institution · prosecutor",n:"SPAK",r:"Special anti-corruption prosecutor",x:"Confirmed an investigation on 1 June 2026 into the protected-status change, land ownership, contracts without tenders and the source of land funds.",ev:"rep",s:["S30"],q:"When will the investigation report?"},
 {id:"aida",k:"Institution · agency",n:"AIDA",r:"Albanian Investment Development Agency",x:"Granted the Sazan project strategic-investor status on 30 December 2024.",ev:"rep",s:["S55"],q:"Was a business plan or feasibility study submitted?"},
 {id:"ngos",k:"Civil society",n:"Wetlands International, EuroNatur & Albanian NGOs",r:"Environmental monitoring",x:"Published satellite analysis of the works and tracked EU responses. Albanian NGOs boycotted ministry consultations until the law is repealed.",ev:"ngo",s:["S50","S51"],q:""},
 {id:"flamingo",k:"Civil society",n:"The Flamingo movement",r:"Residents, environmentalists, students",x:"Began at the Zvërnec fences in May 2026 and grew into national protests against corruption and the cost of living.",ev:"rep",s:["S30","S33"],q:""}
];

BTB.UNRESOLVED = [
 ["Which legal entity holds the Sazan rights inside Albania?","No Albanian company tied to Atlantic Incubation Partners appears in the records searched.",["S03","S01"]],
 ["Are the three Atlantic Incubation Partners records the same company?","They share a name but no registration number, LEI or director.",["S03","S04","S01"]],
 ["Who are the Zvërnec investors, exactly?","The government names Power International Holding's co-owners; the land company's register names the Alkhayyat brothers. No record joins the two.",["S31","S02"]],
 ["Is Albania Land Development part of the Zvërnec project?","Only a single investigative outlet links its accounts to the SPAK probe.",["S42"]],
 ["Who drafted Law 21/2024, and why?","This is the core of SPAK's inquiry and the EU's demands.",["S50","S30"]],
 ["Were the Zvërnec land titles lawfully acquired?","Villagers say the land is disputed; reporting describes alleged fraudulent titles. Not proven.",["S35","S42"]]
];

/* ---------- map ----------
   Point locations are approximate town/feature coordinates. No project or park boundaries are drawn,
   because no published boundary data was reviewed. layer: dev | env | mine | trade | gov */
BTB.LAYERS = [
 {id:"dev",t:"Development & investment"},
 {id:"env",t:"Environmental protection"},
 {id:"mine",t:"Mining & manufacturing"},
 {id:"trade",t:"Trade & supply chains"},
 {id:"gov",t:"Governance & public documents"}
];
BTB.PINS = [
 {id:"sazan",layer:"dev",bay:1,short:"Sazan Island",bside:"l",lon:19.28,lat:40.50,t:"Sazan Island",side:"l",ev:"rep",s:["S43","S55","S31"],body:"Uninhabited former military island. Proposed luxury resort (reported $1.4–1.6bn). Strategic-investor status granted 30 Dec 2024. No construction permit found in the sources reviewed.",link:"01-promise.html#versus"},
 {id:"zvernec",layer:"dev",bay:1,short:"Zvërnec coast",bside:"r",lon:19.406,lat:40.507,t:"Zvërnec coast",side:"r",ev:"ngo",s:["S31","S50","S51"],body:"Proposed coastal resort (PM cited about €4bn) between the Narta Lagoon and the sea. Works seen by satellite by May 2026 without a published permit; suspended in June 2026.",link:"01-promise.html#versus"},
 {id:"airport",layer:"dev",bay:1,short:"Vlorë airport",bside:"l",lon:19.475,lat:40.555,t:"Vlorë airport",side:"r",ev:"rep",s:["S16","S15","S14"],body:"New international airport inside the Vjosa-Narta Protected Landscape. Not operating; in August 2026 the state began terminating the concession over delays. A separate project from Sazan and Zvërnec.",link:"03-environment.html#map"},
 {id:"durres",layer:"trade",lon:19.44,lat:41.32,t:"Durrës port",side:"l",ev:"ngo",s:["S56","S05"],body:"Albania's main seaport. Eagle Hills has an agreement to redevelop the port area. A separate deal from Sazan and Zvërnec.",link:"04-made-in-albania.html"},
 {id:"marine",layer:"env",bay:1,short:"Marine park",bside:"l",lon:19.33,lat:40.40,t:"Karaburun-Sazan Marine Park",side:"l",ev:"ngo",s:["S13","S55"],body:"Albania's first national marine park, proclaimed by the Council of Ministers on 28 April 2010, covering waters around the Karaburun peninsula and Sazan. Home to species of international conservation importance.",link:"03-environment.html"},
 {id:"narta",layer:"env",bay:1,short:"Narta Lagoon",bside:"r",lon:19.46,lat:40.54,t:"Vjosa-Narta Protected Landscape",side:"r",ev:"ngo",s:["S50","S30"],body:"Lagoon, river delta and coastal wetland with flamingos, monk seals and sea-turtle nesting. Its protections were altered by Law 21/2024.",link:"03-environment.html"},
 {id:"vjosa",layer:"env",lon:20.02,lat:40.30,t:"Vjosa Wild River National Park",side:"r",ev:"ngo",s:["S50"],body:"Created in 2023 as Europe's first wild-river national park. Shown as a single approximate point on the river, not a boundary.",link:"03-environment.html"},
 {id:"bulqize",layer:"mine",lon:20.22,lat:41.49,t:"Bulqizë chrome mines",side:"r",ev:"rep",s:["S44","S46","S07"],body:"Albania's main chrome district. Chrome ore is the country's top export in the customs records reviewed. Miners have struck over pay, safety and union rights.",link:"04-made-in-albania.html#chrome"},
 {id:"tirana",layer:"gov",lon:19.82,lat:41.33,t:"Tirana",side:"r",ev:"off",s:["S30","S55","S33"],body:"Seat of the Council of Ministers, AIDA (which grants strategic-investor status) and SPAK (which is investigating). Centre of the protests since October 2026.",link:"02-ownership.html"}
];
BTB.OUTLINE=[[19.37,41.86],[19.59,41.81],[19.52,41.45],[19.44,41.31],[19.46,41.10],[19.40,40.80],[19.49,40.47],[19.30,40.42],[19.50,40.20],[19.74,40.10],[20.00,39.87],[20.02,39.65],[20.32,39.64],[20.68,40.08],[21.05,40.55],[20.95,40.90],[20.73,41.10],[20.55,41.35],[20.55,41.90],[20.60,42.15],[20.07,42.55],[19.80,42.65],[19.60,42.55],[19.40,42.30],[19.40,42.10]];
