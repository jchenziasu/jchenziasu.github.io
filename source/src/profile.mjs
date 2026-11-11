export default {
  name: "Jiangzi Chen",
  photo: "/assets/Jiangzi-Chen-portrait.jpg",
  nameNative: "",
  role: "M.S. student",
  institution: "Arizona State University",
  biography: [
    "I am an M.S. student in Civil, Environmental and Sustainable Engineering at Arizona State University, working with Professor Ruijie Zeng. I received my B.S. in Physical Geography and Resource Environment from Nanjing University of Information Science and Technology in 2025.",
    "My research uses data and models to understand how climate change and human activities reshape water and environmental systems. I combine GIS, remote sensing, hydrological and meteorological models, and AI tools to investigate interactions among the atmosphere, hydrosphere, lithosphere, and biosphere.",
    "At ASU, I am developing an agentic AI system that automates routine modeling work, including model configuration, execution, and input/output format alignment. The system currently runs SWAT and VIC, with the goal of freeing more time for scientific questions and interpretation.",
    "I also work on detecting fine-scale hydrologic features, such as sinkholes and drainage networks, from high-resolution LiDAR-derived elevation data. Alongside this work, I use GIS to identify potentially unpermitted wastewater treatment facilities in rural Arizona through a project with the Arizona Department of Environmental Quality (ADEQ).",
    "Before ASU, I used remote sensing and GIS to study coastal land use, habitat quality, and ecological resilience in China under different SSP–RCP scenarios. I am a coauthor of a 2024 paper in Land on coastal ecological resilience."
  ],
  phdSearch: "I am looking for a PhD position starting in Fall 2027.",
  interests: ["Agentic AI for hydrological and atmospheric modeling", "Global change and the terrestrial water cycle", "Remote sensing, GIS, and LiDAR for environmental change", "Urban heat, air quality, and water security in dryland cities"],
  research: [
    {
      title: "Fine-scale hydrologic feature detection from LiDAR-derived DEMs",
      period: "Oct 2026 – Present",
      affiliation: "Arizona State University",
      supervisor: "Ruijie Zeng",
      contribution: "I am redesigning experiments from a prior doctoral study using PDE-based anisotropic diffusion to smooth sub-meter LiDAR-derived DEMs and detect sinkholes and drainage networks. I am investigating an iteration threshold to improve generalization while preserving terrain edges.",
      tags: ["LiDAR", "DEM analysis", "Anisotropic diffusion"]
    },
    {
      title: "Agentic AI for hydrological and atmospheric modeling workflows",
      period: "Sep 2026 – Present",
      affiliation: "Independent project · Arizona State University",
      support: "Ruijie Zeng",
      contribution: "I conceived and lead the development of an agentic AI system for model configuration, execution, and input/output format alignment. It currently runs SWAT and VIC; I have also gained hands-on experience with WRF and Noah-MP workflows and data structures.",
      tags: ["Agentic AI", "SWAT", "VIC"]
    },
    {
      title: "Identifying on-site wastewater treatment facilities",
      period: "Jan 2026 – Present",
      affiliation: "Arizona State University",
      supervisor: "Ruijie Zeng",
      question: "Spatial identification of potentially unpermitted facilities to support rural environmental health in Arizona.",
      contribution: "I analyze the statewide distribution of on-site wastewater treatment facilities using GIS and work on classification and identification methods for potential facilities.",
      tags: ["GIS", "Wastewater", "Environmental health"]
    },
    {
      title: "Assessing coastal ecological resilience",
      period: "Feb 2024 – Jul 2025",
      affiliation: "NUIST",
      supervisor: "Chengyi Zhao",
      question: "Assessing ecological resilience in China's coastal zone using the Pressure–State–Response model and future climate and development scenarios.",
      contribution: "I contributed to data analysis for a study of spatial and temporal variation in coastal ecological resilience and its projected changes under SSP–RCP scenarios.",
      outcome: "Coauthored a paper published in Land in 2024.",
      tags: ["Ecological resilience", "PSR model", "Scenario analysis"],
      links: [{ label: "Read the paper", url: "https://doi.org/10.3390/land13122130" }]
    },
    {
      title: "Ecological water use in the Tarim River Basin",
      period: "Jun 2024 – Jul 2025",
      affiliation: "NUIST",
      supervisor: "Yaojie Liu",
      contribution: "I extracted Normalized Difference Vegetation Index (NDVI) data using Google Earth Engine, handled outliers using interpolation and other methods, and prepared the data for ecological water-use analysis.",
      tags: ["Google Earth Engine", "NDVI", "Data preparation"]
    },
    {
      title: "Invasive vegetation and tidal creek dynamics",
      period: "Oct 2023 – Aug 2024",
      affiliation: "NUIST",
      supervisor: "Guanghui Zheng",
      question: "How does Spartina alterniflora expansion relate to tidal creek development in Yellow Sea mudflats?",
      contribution: "I used high-resolution remote sensing to monitor the species' expansion in the Yancheng Red-crowned Crane Reserve and examine relationships between vegetation distribution and density and tidal creek geometry.",
      tags: ["Remote sensing", "Coastal wetlands", "Tidal creeks"]
    },
    {
      title: "Regional resilience to disasters",
      period: "Sep 2022 – Jul 2024",
      affiliation: "NUIST",
      supervisor: "Jiaxun Li",
      contribution: "I extracted geographical data for Jiangning District, Nanjing, using ArcGIS and ENVI, applied a multi-attribute decision-making model, and compared resilience assessments to inform recommendations for reducing village disaster losses.",
      tags: ["ArcGIS", "ENVI", "MADM"]
    },
    {
      title: "Coastal land-use change and habitat quality",
      period: "Mar 2023 – Mar 2024",
      affiliation: "NUIST · Project lead",
      supervisor: "Chengyi Zhao",
      contribution: "I led a project coupling PLUS and InVEST to model coastal land-use patterns and habitat quality from 2020 to 2050 under three SSP–RCP scenarios. I assessed the drivers of habitat-quality change and the contribution of land-cover changes to degradation.",
      tags: ["PLUS", "InVEST", "Habitat quality"]
    }
  ],
  publications: [
    {
      title: "Assessment and Prediction of Coastal Ecological Resilience Based on the Pressure–State–Response (PSR) Model",
      authors: ["Zhaoyi Wan", "Chengyi Zhao", "Jianting Zhu", "Xiaofei Ma", "Jiangzi Chen", "Junhao Wang"],
      venue: "Land, 13(12), 2130 · 2024",
      status: "Published",
      url: "https://doi.org/10.3390/land13122130"
    },
    {
      title: "Impact of Spartina Alterniflora Expansion on the Tidal Creek Formation in the Mudflat of Yellow Sea",
      authors: [],
      venue: "Manuscript submitted",
      status: "Submitted",
      url: ""
    }
  ],
  education: [
    {
      institution: "Arizona State University",
      degree: "M.S. in Civil, Environmental and Sustainable Engineering",
      period: "Aug 2025 – Expected May 2027",
      detail: ""
    },
    {
      institution: "Nanjing University of Information Science and Technology",
      degree: "B.S. in Physical Geography and Resource Environment",
      period: "Sep 2021 – Jun 2025",
      detail: ""
    }
  ],
  skills: ["ArcGIS", "ENVI", "Google Earth Engine (GEE)", "Python", "MATLAB", "FRAGSTATS", "PLUS", "InVEST", "SWAT", "VIC", "LiDAR-derived DEM analysis", "Agentic AI system development"],
  skillGroups: [
    {title: "GIS & remote sensing", items: ["ArcGIS", "ENVI", "Google Earth Engine (GEE)", "FRAGSTATS", "LiDAR-derived DEM analysis"]},
    {title: "Environmental modeling", items: ["PLUS", "InVEST", "SWAT", "VIC"], note: "Hands-on experience with WRF and Noah-MP workflows and data structures."},
    {title: "Programming & AI", items: ["Python", "MATLAB", "Agentic AI system development"]}
  ],
  conference: {
    title: "Estimation of Unpermitted Wastewater Treatment Facility (OWTF) in Rural Arizona for Environmental Health",
    authors: "Jiangzi Chen and Ruijie Zeng",
    meeting: "AGU Fall Meeting 2026",
    date: "December 10, 2026",
    dateISO: "2026-12-10",
    location: "San Francisco, California",
    session: "H43P · Water Quality and Watersheds: From Scientific Innovations to Actions II",
    status: "Accepted poster · Upcoming",
    url: "https://www.agu.org/annual-meeting"
  },
  email: "jchen722@asu.edu",
  links: [],
  cvUrl: "assets/Jiangzi-Chen-CV.pdf"
};

