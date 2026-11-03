/* BEYOND THE INVESTMENT — Who benefits? Who decides?
   Policy instruments (status as reviewed November 2026), stakeholders, recommendations, simulation. */
window.BTB = window.BTB || {};

/* type: albania | enacted | framework | process
   pos: 0 (voluntary) – 100 (binding, enforced at the border)
   reach: land / chrome / garments → y (applies) p (partly) n (no) */
BTB.POLICIES = [
 {id:"sil",short:"Strategic Investments Law",t:"Law on Strategic Investments",j:"Albania",type:"albania",pos:72,status:"Enacted 2015. Application deadline extended to Dec 2027. In July 2026 the government announced it will be abolished; a replacement is being drafted, with no bill published.",binds:"Investors seeking fast-track status; state agencies",req:"Lets AIDA grant strategic-investor status with accelerated procedures and incentives.",enf:"Administrative; decisions can be challenged in court.",reach:{land:"y",chrome:"n",garments:"n"},src:["S26","S27","S28","S29"]},
 {id:"pa",short:"Law 21/2024",t:"Protected Areas Law amendment (Law 21/2024)",j:"Albania",type:"albania",pos:80,status:"Enacted Feb 2024. The European Parliament wants it repealed by the end of 2026; Albanian NGOs boycott consultations until it is.",binds:"State; developers in protected areas",req:"Changes how protected-area status can be altered. Critics say it lets the PM override protections.",enf:"National law.",reach:{land:"y",chrome:"n",garments:"n"},src:["S50","S51"]},
 {id:"bo",short:"BO register",t:"Beneficial-owner register",j:"Albania",type:"albania",pos:60,status:"In operation, run by the National Business Center.",binds:"Companies registered in Albania",req:"Companies declare the natural persons who ultimately own or control them.",enf:"Declaration-based; accuracy depends on verification.",reach:{land:"y",chrome:"y",garments:"y"},src:["S02"]},
 {id:"acc",short:"Accession Ch. 27",t:"EU accession: Chapter 27 (environment)",j:"EU–Albania",type:"process",pos:70,status:"Ongoing negotiations. The Commission warned in June 2026 that the Zvërnec works could jeopardise closing the chapter.",binds:"Albanian government, as a condition of membership",req:"Alignment with EU environmental law, including nature protection.",enf:"Political: chapters stay open until benchmarks are met.",reach:{land:"y",chrome:"p",garments:"p"},src:["S51","S30"]},
 {id:"ungp",short:"UN Guiding Principles",t:"UN Guiding Principles on Business and Human Rights",j:"Global",type:"framework",pos:12,status:"Endorsed by the UN Human Rights Council, 2011. Non-binding.",binds:"Expectation on all companies and states",req:"Companies should respect human rights and carry out due diligence; states should protect.",enf:"None directly; reputational.",reach:{land:"p",chrome:"p",garments:"p"},src:["S65"]},
 {id:"oecd",short:"OECD Guidelines",t:"OECD Guidelines for Multinational Enterprises",j:"OECD and adherents",type:"framework",pos:20,status:"Updated 2023. Non-binding, with national contact points that handle complaints.",binds:"Companies from adhering countries",req:"Risk-based due diligence across supply chains, including environment and labour.",enf:"Mediation through national contact points.",reach:{land:"p",chrome:"p",garments:"p"},src:["S66"]},
 {id:"csrd",short:"CSRD",t:"Corporate Sustainability Reporting Directive (CSRD)",j:"EU",type:"enacted",pos:42,status:"Enacted 2022. Scope narrowed by the 2026 Omnibus directive.",binds:"Large companies in scope",req:"Report sustainability risks and impacts, including in the value chain.",enf:"National authorities; audited reporting.",reach:{land:"n",chrome:"p",garments:"y"},src:["S60","S69"]},
 {id:"csddd",short:"CSDDD",t:"Corporate Sustainability Due Diligence Directive (CSDDD)",j:"EU",type:"enacted",pos:62,status:"Enacted 2024; amended by Directive (EU) 2026/470. Now covers companies with more than 5,000 employees and €1.5bn turnover. Transposition by 26 July 2028; applies from 26 July 2029.",binds:"Very large companies",req:"Identify, prevent and address human-rights and environmental harms in the chain of activities.",enf:"National authorities; penalties capped at 3% of turnover; EU-wide civil liability removed.",reach:{land:"n",chrome:"p",garments:"y"},src:["S61","S69","S70"]},
 {id:"lksg",short:"German LkSG",t:"German Supply Chain Act (LkSG)",j:"Germany",type:"enacted",pos:58,status:"In force since 2023.",binds:"Large companies in Germany",req:"Supply-chain due diligence on human rights and environment.",enf:"BAFA (federal office) with fines.",reach:{land:"n",chrome:"p",garments:"p"},src:["S67"]},
 {id:"flr",short:"EU Forced Labour Reg.",t:"EU Forced Labour Regulation",j:"EU",type:"enacted",pos:88,status:"Enacted 2024. Applies from 14 December 2027.",binds:"All products placed on or exported from the EU market",req:"Bans products made with forced labour.",enf:"Investigations, withdrawal of products from the market.",reach:{land:"n",chrome:"p",garments:"p"},src:["S62"]},
 {id:"uflpa",short:"UFLPA",t:"Uyghur Forced Labor Prevention Act",j:"United States",type:"enacted",pos:92,status:"Enacted Dec 2021; enforced since June 2022.",binds:"Importers into the US",req:"Presumes goods with Xinjiang-linked inputs are made with forced labour unless proven otherwise.",enf:"Border detention by US Customs.",reach:{land:"n",chrome:"n",garments:"p"},src:["S68"]},
 {id:"espr",short:"ESPR / DPP",t:"Ecodesign for Sustainable Products Regulation (Digital Product Passports)",j:"EU",type:"enacted",pos:76,status:"Enacted 2024. Product-specific rules, including for textiles, are still being adopted.",binds:"Products placed on the EU market",req:"Product information requirements, delivered through a Digital Product Passport.",enf:"Market surveillance.",reach:{land:"n",chrome:"p",garments:"y"},src:["S63"]},
 {id:"eudr",short:"EUDR",t:"EU Deforestation Regulation (EUDR)",j:"EU",type:"enacted",pos:84,status:"Enacted 2023; application postponed to 30 Dec 2026 (30 Jun 2027 for small operators). A simplification review was due in April 2026.",binds:"Operators placing listed commodities, including leather, on the EU market",req:"Prove products are deforestation-free and legally produced.",enf:"Due-diligence statements; checks by national authorities.",reach:{land:"n",chrome:"n",garments:"p"},src:["S64","S71"]}
];
BTB.PTYPE = {albania:"Albanian law or system",enacted:"Enacted law",framework:"Voluntary framework",process:"Political process"};

BTB.GAPS = [
 ["No rule reaches the investors","EU supply-chain laws bind companies that sell goods into Europe. A private resort developer sells none, so only Albanian law and EU accession apply.",["S69","S51"]],
 ["The largest brands only","After 2026, EU due diligence covers only companies with more than 5,000 employees and €1.5bn turnover, and not until 2029.",["S69"]],
 ["Declarations, not verification","Albania's beneficial-owner register records what companies declare. The Zvërnec land company shows how far paper and real owners can differ.",["S02"]],
 ["Forced labour is a high bar","Import bans need evidence of forced labour. Underpayment and union-busting alone don't meet it.",["S62"]]
];

/* stakeholders: who gains, who bears costs, how much say */
BTB.STAKEHOLDERS = [
 {id:"gov",t:"Albanian government",gain:"Investment, tourism growth and political credit; foreign tourist numbers hit a record 12.47 million in 2025.",cost:"Loss of public trust; EU accession risk; criminal investigation of its decisions.",say:3,src:["S25","S51","S30"]},
 {id:"inv",t:"Foreign investors",gain:"Fast-track access to prime coastal sites under strategic-investor status.",cost:"Reputational risk, investigation and suspended works.",say:3,src:["S55","S51"]},
 {id:"comm",t:"Local residents of Vlorë & Zvërnec",gain:"Possible jobs and tourism income (not yet documented).",cost:"Fenced-off beaches; villagers say the land is disputed.",say:1,src:["S30","S35"]},
 {id:"workers",t:"Albanian workers",gain:"Jobs in mining, garments and tourism.",cost:"Europe's lowest minimum wage; documented underpayment; contested union rights.",say:1,src:["S20","S52","S44"]},
 {id:"civil",t:"Civil society & students",gain:"A national voice; works suspended after protests.",cost:"Arrests and injuries in protests.",say:2,src:["S51","S36"]},
 {id:"eu",t:"European Union",gain:"A candidate aligned with EU law; supply-chain standards.",cost:"Accusations of interference.",say:2,src:["S51"]},
 {id:"buyers",t:"Foreign buyers & brands",gain:"Low-cost production near Europe.",cost:"Due-diligence duties and reputational exposure.",say:2,src:["S09","S69"]},
 {id:"nature",t:"Ecosystems",gain:"—",cost:"Wetlands, dunes and marine habitats at risk.",say:0,src:["S50","S13"]}
];

/* recommendations: who, priority, title, why, actions[], tech[], risk, src[] */
BTB.RECS = [
 ["Government of Albania","u","Publish every strategic-investor application, decision and condition","The Sazan status was reportedly granted without a business plan. Nobody outside government can check what was assessed.",["Publish all past and future decisions as open data","Require a business plan and an environmental assessment before status is granted","Write these duties into the replacement law"],["opendata","ai"],"A partial release can make a closed process look open.",["S55","S28","S29"]],
 ["Government of Albania","u","Repeal or rewrite Law 21/2024","It opened the Vjosa-Narta protected landscape and is the EU's main demand.",["Restore protection before any new approval","Require public consultation for any change to a protected area"],["satellite","remote"],"Backlash if repeal is presented as foreign pressure rather than public interest.",["S50","S51"]],
 ["Government of Albania","h","Verify the beneficial-owner register","The Zvërnec land company's paper owner differs from its real owners.",["Check declared owners against ID and bank data","Flag companies where legal and beneficial owners differ","Issue signed ownership credentials (vLEI)"],["did"],"A signed credential can lend weight to an unchecked declaration.",["S02","S82"]],
 ["Government of Albania","h","Protect union rights and fund labour inspection","Miners report dismissals for organising; underpayment was documented in garment workshops.",["Investigate the reported dismissals","Fund unannounced inspections and publish results by sector"],["zkp"],"Inspection data can be used against complainants if poorly protected.",["S44","S52"]],
 ["Investors & developers","u","Disclose the full ownership chain and pause until SPAK reports","No record links the Abu Dhabi company to Albanian rights; the Zvërnec investors are named only by the government.",["Publish the chain from the Albanian rights-holder to ultimate owners","Commission an independent environmental assessment"],["did","opendata"],"Voluntary disclosure depends on reputation, not law.",["S01","S31","S30"]],
 ["Foreign buyers & brands","h","Map Albanian suppliers to the workshop and verify wages","Customs records show brand importers but not workshops; 2016 data showed underpayment.",["Name workshops on purchase orders","Verify pay against the €517 minimum with worker surveys","Pay prices that cover legal wages"],["zkp","dpp"],"Publishing workshop names can expose them; commit not to cut and run.",["S09","S52","S20"]],
 ["Foreign buyers & brands","h","Trace chrome to the mine","Ore passes through offshore traders that obscure its origin.",["Require mine-of-origin data from traders","Engage the independent miners' union, not only the company"],["iot","blockchain"],"Strict tracing can push buyers away from small or unionised mines.",["S08","S44"]],
 ["European Union","h","Make the Vjosa-Narta outcome an accession benchmark","Accession is the lever that reached the government.",["Close Chapter 27 only after repeal of Law 21/2024","Fund independent monitoring by Albanian NGOs"],["satellite"],"Perceived interference can fuel nationalism.",["S51"]],
 ["Civil society & journalists","m","Run open satellite monitoring of protected areas","Satellite analysis revealed the works before any permit was public.",["Publish free Sentinel-2 time series for Vjosa-Narta and Karaburun-Sazan","Match every change to a permit, or flag it"],["satellite","remote"],"Imagery can be turned on residents and protesters.",["S50","S85"]],
 ["Verifiers & data providers","m","Label fuzzy matches as leads, not facts","Three companies share one name; AI tools flag \"possibly the same as\" links.",["Show match confidence on every flag","Require a shared identifier before reporting a link"],["ai"],"Treating a guess as fact can defame people.",["S11"]]
];
BTB.PRIO = {u:"Urgent",h:"High",m:"Medium"};

/* simulation: roles → rounds → options [label, effects{inv,jobs,env,trans,comm}, consequence, reality?] */
BTB.SIM = {
 dims:{inv:"Investment",jobs:"Jobs",env:"Environment",trans:"Transparency",comm:"Community"},
 roles:[
  {id:"minister",k:"Role 1",t:"Government decision-maker",d:"A foreign investor wants to build a luxury resort on protected coast near Vlorë.",
   rounds:[
    {q:"The investor applies for strategic-investor status without a business plan or feasibility study. What do you do?",o:[
      ["Grant the status now to secure the deal",{inv:2,jobs:1,env:-1,trans:-2,comm:-1},"The deal moves fast, but no one outside government can check what was assessed. Questions about favouritism follow.","Reported: Sazan's status was granted on 30 Dec 2024, reportedly without a business plan."],
      ["Require a business plan and environmental assessment first",{inv:0,jobs:0,env:1,trans:2,comm:1},"Slower, but the decision rests on published evidence that can withstand scrutiny.",""],
      ["Reject the application",{inv:-2,jobs:-1,env:2,trans:1,comm:0},"Protects the site, but sends a signal that may deter other investors.",""]]},
    {q:"The site sits inside a protected landscape. What do you do with the law?",o:[
      ["Amend the protected-areas law to allow development",{inv:2,jobs:1,env:-2,trans:-1,comm:-1},"Development becomes possible, but the EU flags the change and NGOs boycott consultations.","Documented: Law 21/2024 amended the regime; the EU called for repeal."],
      ["Keep protection and ask for a redesign outside the protected area",{inv:0,jobs:1,env:1,trans:1,comm:1},"A compromise: less value for the investor, fewer legal risks.",""],
      ["Strengthen protection and invite low-impact tourism",{inv:-1,jobs:0,env:2,trans:1,comm:1},"Protects habitats; growth depends on smaller, local operators.",""]]},
    {q:"Who owns the investing company is unclear: the paper owner differs from the real owners. What do you require?",o:[
      ["Accept the registered shareholder",{inv:1,jobs:0,env:0,trans:-2,comm:-1},"Quick, but you can't say who profits from public land.","Documented: Albania Land Development's legal shareholder differs from its beneficial owners."],
      ["Require the full ownership chain before any approval",{inv:-1,jobs:0,env:0,trans:2,comm:1},"Some investors withdraw; those who stay are accountable.",""],
      ["Publish ownership for every strategic investor as open data",{inv:-1,jobs:0,env:0,trans:2,comm:2},"Journalists and prosecutors can check every deal; trust rises.",""]]},
    {q:"Work begins and fences go up on a public beach. Residents protest. What do you do?",o:[
      ["Defend the project and police the protests",{inv:1,jobs:0,env:-1,trans:-1,comm:-2},"Protest grows from a local issue into a national movement.","Documented: fences in May 2026 sparked the Flamingo movement and later national protests."],
      ["Suspend works pending review and open the beach",{inv:-1,jobs:-1,env:1,trans:1,comm:2},"Tension falls; the project's future depends on the investigation.","Documented: works were suspended and the fence removed in June 2026."],
      ["Hold a binding local consultation",{inv:0,jobs:0,env:1,trans:2,comm:2},"Slow, but any outcome carries local legitimacy.",""]]}
   ]},
  {id:"buyer",k:"Role 2",t:"Sourcing manager at a European brand",d:"Your brand buys shoes from an Albanian fason workshop. An NGO report says workers there are paid below the legal minimum.",
   rounds:[
    {q:"The NGO report reaches your desk. First move?",o:[
      ["Commission an announced audit",{inv:0,jobs:0,env:0,trans:0,comm:-1},"The audit finds no problem on the day. Workers say the workshop prepared for it.",""],
      ["Ask for payroll data and run anonymous worker surveys",{inv:-1,jobs:0,env:0,trans:2,comm:1},"You find gaps between payroll and what workers report. Now you know.",""],
      ["Drop the supplier immediately",{inv:1,jobs:-2,env:0,trans:-1,comm:-2},"Your risk falls; the workers lose their jobs and the problem moves elsewhere.",""]]},
    {q:"You confirm underpayment. What do you change?",o:[
      ["Demand the supplier fixes it at its own cost",{inv:0,jobs:-1,env:0,trans:0,comm:0},"The workshop cuts corners elsewhere to cover the cost.",""],
      ["Raise purchase prices to cover legal wages, tied to verified pay",{inv:-1,jobs:1,env:0,trans:1,comm:2},"Costs rise slightly; wages are verifiably met.",""],
      ["Introduce monthly zero-knowledge wage proofs",{inv:-1,jobs:0,env:0,trans:2,comm:1},"Pay compliance is checkable without exposing workers. Cash pay still needs surveys.",""]]},
    {q:"Your company publishes its CSRD report. How much do you disclose about Albania?",o:[
      ["Report only aggregate supplier numbers",{inv:0,jobs:0,env:0,trans:-1,comm:-1},"Compliant on paper, but nothing outside the company can be checked.",""],
      ["Name your Albanian workshops on an open supplier map",{inv:0,jobs:0,env:0,trans:2,comm:1},"Unions and NGOs can now raise problems directly with you.",""],
      ["Publish names plus wage-verification results",{inv:-1,jobs:0,env:0,trans:2,comm:2},"The most accountable option, and the most exposed.",""]]}
   ]}
 ]
};
