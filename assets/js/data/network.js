/* BEYOND THE INVESTMENT — Follow the Money network.
   Every edge has a relationship type, an evidence type and source IDs.
   Clusters are drawn separately: no documented link joins the development projects to the export supply chains. */
window.BTB = window.BTB || {};
BTB.NET = {
  w:1120,h:800,
  clusters:[
    {id:"sazan",t:"SAZAN ISLAND PROJECT",x:20,y:20,w:520,h:420},
    {id:"zvernec",t:"ZVËRNEC COAST PROJECT",x:580,y:20,w:520,h:420},
    {id:"state",t:"STATE, OVERSIGHT & INTERNATIONAL",x:20,y:455,w:1080,h:100},
    {id:"supply",t:"EXPORT SUPPLY CHAINS (SEPARATE)",x:20,y:600,w:1080,h:185}
  ],
  wall:{y:578,t:"No documented ownership or commercial link between the projects above and the supply chains below"},
  nodes:[
    /* Sazan */
    {id:"kushner",c:"sazan",x:130,y:75,k:"person",l:["Jared Kushner"],s:"Affinity Partners",ev:"off",x2:"Investor; director of an Abu Dhabi holding company on record. Says family ties played no role.",src:["S01","S34"],url:"https://graph.sayari.com/resource/entity/AcRddw24EjmWs7m3CDZmzg"},
    {id:"alabbar",c:"sazan",x:400,y:75,k:"person",l:["Mohamed Alabbar"],s:"Eagle Hills founder",ev:"off",x2:"Emirati developer; co-director of the Abu Dhabi holding company. Eagle Hills separately has a Durrës port agreement.",src:["S01","S56"],url:"https://graph.sayari.com/resource/entity/gdKlzPqoO5Fxm3VvsaehLA"},
    {id:"aipuae",c:"sazan",x:100,y:180,k:"co",l:["Atlantic Incubation","Partners (Abu Dhabi)"],s:"ADGM",ev:"off",x2:"Abu Dhabi-registered company; a shareholder of the holding company.",src:["S01"],url:"https://graph.sayari.com/resource/entity/G1e7j8lnrhIOuKvDF_TVpw"},
    {id:"aedp",c:"sazan",x:280,y:180,k:"co",l:["Atlantic Eagle Dhabi","Partners Holding"],s:"Abu Dhabi · SPV",ev:"off",x2:"Special-purpose vehicle incorporated 21 Oct 2024 (ADGM 21425). No record found linking it to rights in Albania.",src:["S01"],url:"https://graph.sayari.com/resource/entity/RZ7g9NSkBy-l80zHTkGfig"},
    {id:"eh",c:"sazan",x:450,y:180,k:"co",l:["Eagle Hills Skyline","Investment Holdings"],s:"Abu Dhabi",ev:"off",x2:"Eagle Hills group entity; the holding company's other shareholder.",src:["S01"],url:"https://graph.sayari.com/resource/entity/fBvUy8NO4lIOnRPqH9LsCw"},
    {id:"aipus",c:"sazan",x:130,y:290,k:"co",l:["Atlantic Incubation","Partners (USA)"],s:"Delaware / Florida",ev:"off",x2:"Registered in Delaware in 2023; filed a US trademark application for \"SAZAN\". Reported holder of strategic-investor status.",src:["S03","S04","S55"],url:"https://graph.sayari.com/resource/entity/kkiWiryCCGzgdfX8q9W7Mw"},
    {id:"affinity",c:"sazan",x:400,y:290,k:"co",l:["Affinity Partners"],s:"Kushner's fund",ev:"rep",x2:"Kushner's Miami-based private-equity firm. Press reports describe Atlantic Incubation Partners as affiliated.",src:["S43","S31"]},
    {id:"srd",c:"sazan",x:420,y:390,k:"co",l:["\"Sazan Real Estate","Development\""],s:"named in PR statement",ev:"unv",x2:"Named in a PR statement as managing the project. AFP could find no legal trace of a company with this name.",src:["S31"]},
    {id:"sazanP",c:"sazan",x:200,y:390,k:"project",l:["Sazan Island resort"],s:"proposal · ~$1.4–1.6bn",ev:"rep",x2:"Proposed luxury resort on the former military island. Strategic-investor status granted; no construction permit found.",src:["S43","S55","S31"]},
    /* Zvërnec */
    {id:"pih",c:"zvernec",x:700,y:75,k:"co",l:["Power International","Holding"],s:"Qatar",ev:"rep",x2:"Named by the government as the holding whose two co-owners are the Zvërnec investors.",src:["S31"]},
    {id:"alk",c:"zvernec",x:960,y:75,k:"person",l:["Alkhayyat brothers"],s:"50% + 50%",ev:"off",x2:"Beneficial owners of Albania Land Development in Albania's register.",src:["S02"],url:"https://graph.sayari.com/resource/entity/o9tBo64s3nO-MEc3IfIGig"},
    {id:"kastrati",c:"zvernec",x:700,y:200,k:"co",l:["Kastrati Group"],s:"Shefqet Kastrati",ev:"off",x2:"Business group; a new company registered Dec 2024. Reporting links people around it to land deals; no ownership link to the project on record.",src:["S06","S34"],url:"https://graph.sayari.com/resource/entity/-EHllki7KxGtru87kLTE9w"},
    {id:"ald",c:"zvernec",x:960,y:200,k:"co",l:["Albania Land","Development"],s:"Vlorë · reg. May 2025",ev:"off",x2:"Vlorë company; legal shareholder differs from its beneficial owners. A single outlet reports its accounts were frozen.",src:["S02","S42"],url:"https://graph.sayari.com/resource/entity/a8Qnvpj7gk9b6N462g47_Q"},
    {id:"zvernecP",c:"zvernec",x:830,y:350,k:"project",l:["Zvërnec coastal resort"],s:"proposal · ~€4bn cited",ev:"ngo",x2:"Proposed resort in the Vjosa-Narta Protected Landscape. Works began without a published permit; suspended June 2026.",src:["S31","S50","S51"]},
    /* state & oversight */
    {id:"gov",c:"state",x:120,y:510,k:"gov",l:["Council of Ministers"],s:"PM Edi Rama",ev:"off",x2:"Government that amended the protected-areas law and backed the projects. No personal ownership link found for the PM.",src:["S50","S10"],url:"https://graph.sayari.com/resource/entity/vWWLbWhxqimRHtU0d1txYA"},
    {id:"aida",c:"state",x:340,y:510,k:"gov",l:["AIDA"],s:"investment agency",ev:"off",x2:"Grants strategic-investor status under the 2015 law.",src:["S26","S55"]},
    {id:"spak",c:"state",x:560,y:510,k:"probe",l:["SPAK"],s:"anti-corruption prosecutor",ev:"rep",x2:"Investigating since 1 June 2026.",src:["S30"]},
    {id:"eu",c:"state",x:780,y:510,k:"gov",l:["European Commission","& Parliament"],s:"accession talks",ev:"rep",x2:"Warned the works could block the environment chapter; Parliament wants Law 21/2024 repealed by end-2026.",src:["S51"]},
    {id:"ngos",c:"state",x:990,y:510,k:"probe",l:["Wetlands Intl, EuroNatur","& Albanian NGOs"],s:"monitoring",ev:"ngo",x2:"Published satellite analysis and tracked the works.",src:["S50","S51"]},
    /* supply chains */
    {id:"albchrome",c:"supply",x:120,y:650,k:"co",l:["AlbChrome shpk"],s:"chrome miner · exporter",ev:"off",x2:"Registered 2000; LEI on file. Mines at Bulqizë.",src:["S07"],url:"https://graph.sayari.com/resource/entity/nfoO5PLtz49Yy_Fb30u2xQ"},
    {id:"yildirim",c:"supply",x:120,y:745,k:"person",l:["Ali Riza Yildirim"],s:"beneficial owner 50%",ev:"off",x2:"One beneficial owner listed on AlbChrome's record.",src:["S07"],url:"https://graph.sayari.com/resource/entity/k5EvfwMELfvwr7e930Py9A"},
    {id:"etikrom",c:"supply",x:330,y:650,k:"co",l:["Eti Krom"],s:"Turkey · buyer",ev:"off",x2:"Recorded buyer of AlbChrome shipments.",src:["S07"],url:"https://graph.sayari.com/resource/entity/nYzqMvttGInnqIBlC-v_xA"},
    {id:"mitsu",c:"supply",x:330,y:745,k:"co",l:["Mitsubishi Corp.","RtM Japan"],s:"buyer",ev:"off",x2:"Recorded buyer of AlbChrome shipments.",src:["S07"],url:"https://graph.sayari.com/resource/entity/zQSMrv2iEZ8ZhFXCtNUMHg"},
    {id:"traders",c:"supply",x:530,y:700,k:"co",l:["Chrome traders"],s:"Hong Kong · UAE · Albania",ev:"off",x2:"Jackson Minerals (HK), Stella Mare shpk and Oaktron FZE (UAE) ship most Albanian chrome ore in the records. Their customers are not mapped here.",src:["S08"],url:"https://graph.sayari.com/resource/entity/J4aT_tE7tW0GiQHmhfSh2Q"},
    {id:"exp",c:"supply",x:730,y:700,k:"co",l:["Albanian shoe &","T-shirt exporters"],s:"HS 6403 · 6109",ev:"off",x2:"Exporting companies in customs records; the workshops behind them are rarely named.",src:["S09","S05"]},
    {id:"itx",c:"supply",x:930,y:650,k:"co",l:["ITX Turkey"],s:"importer",ev:"off",x2:"Recorded importer of Albanian shoes (303 shipments) and T-shirts (69, plus 41 via a Stradivarius branch), 2020–2022.",src:["S09"],url:"https://graph.sayari.com/resource/entity/rK0DNjZEoxtBIlPdEnmh9A"},
    {id:"strad",c:"supply",x:930,y:745,k:"co",l:["Stradivarius México","· Decathlon Indonesia"],s:"importers",ev:"off",x2:"Recorded importers of Albanian T-shirts (24 and 44 shipments).",src:["S09"]},
    {id:"inditex",c:"supply",x:1040,y:600,k:"co",l:["Inditex group"],s:"parent not on record",ev:"unv",x2:"\"ITX\" and Stradivarius indicate the Inditex group, but the parent link is not confirmed in the records reviewed.",src:["S09"]}
  ],
  edges:[
    ["kushner","aedp","ownership","off","Director",["S01"]],
    ["alabbar","aedp","ownership","off","Director",["S01"]],
    ["aipuae","aedp","ownership","off","Shareholder",["S01"]],
    ["eh","aedp","ownership","off","Shareholder",["S01"]],
    ["alabbar","eh","reported","rep","Founder of the Eagle Hills group",["S56"]],
    ["aipuae","aipus","unverified","unv","Same name, no shared identifier",["S03","S01"]],
    ["affinity","aipus","reported","rep","Reported affiliate",["S43"]],
    ["kushner","affinity","reported","rep","Founder and head",["S34"]],
    ["aipus","sazanP","ownership","off","Filed the \"SAZAN\" trademark application",["S04"]],
    ["aida","sazanP","decision","rep","Strategic-investor status, 30 Dec 2024",["S55"]],
    ["srd","sazanP","reported","unv","Named as manager in a PR statement; no legal trace",["S31"]],
    ["gov","aida","decision","off","Government investment agency",["S26"]],
    ["gov","zvernecP","decision","ngo","Law 21/2024 altered protections",["S50"]],
    ["pih","zvernecP","reported","rep","Named by the government as investors",["S31"]],
    ["pih","alk","unverified","unv","Fits the government's description; no record links them",["S31","S02"]],
    ["alk","ald","ownership","off","Beneficial owners, 50% each",["S02"]],
    ["ald","zvernecP","alleged","alg","Land titles reportedly under investigation (single source)",["S42"]],
    ["kastrati","zvernecP","alleged","alg","Alleged role in land deals (BIRN, via Mother Jones)",["S34"]],
    ["spak","zvernecP","decision","rep","Investigating land, permits and funds",["S30"]],
    ["spak","gov","decision","rep","Investigating the 2024 law change and tenders",["S30"]],
    ["eu","gov","decision","rep","Accession conditions (Chapter 27)",["S51"]],
    ["ngos","zvernecP","reported","ngo","Satellite analysis of works without a published permit",["S50"]],
    ["yildirim","albchrome","ownership","off","Beneficial owner (50%)",["S07"]],
    ["albchrome","etikrom","trade","off","Ships chrome to",["S07"]],
    ["albchrome","mitsu","trade","off","Ships chrome to",["S07"]],
    ["exp","itx","trade","off","Shoes and T-shirts, 2020–2022",["S09"]],
    ["exp","strad","trade","off","T-shirts, 2020–2022",["S09"]],
    ["itx","inditex","unverified","unv","Name indicates the Inditex group; not confirmed in records",["S09"]],
    ["strad","inditex","unverified","unv","Stradivarius is an Inditex brand name; parent not confirmed in records",["S09"]]
  ],
  rel:{ownership:"Ownership or directorship",decision:"Public decision or oversight",trade:"Recorded trade",reported:"Reported association",alleged:"Allegation",unverified:"Unverified link"}
};
