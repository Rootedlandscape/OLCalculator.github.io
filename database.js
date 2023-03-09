
var price_data = [
    {
        id: "design",
        category: "Design",
        list: [
            {
                min: 1000,
                max: 2500,
                desc: "3D Drawing - Includes Site plan and walkthrough",
                image: "./assets/Photos/Design/Design.webp"
            },
            {
                min: 2500,
                max: 5000,
                desc: "Premium 3D Drawing - Includes 3D Drawing w/ site plan, walkthrough, Irrigation and lighting plan, utility locates",
                image: "./assets/Photos/Design/Design.webp",
            }
        ]
    },
    {
        id: "permits_fees",
        category: "Permits and Fees",
        list: [
            {
                min: 500,
                max: 1000,
                desc: "Simple",
                image: "./assets/Photos/Permits_and_Fees/Permites_and_fees.webp",
            },
            {
                min: 1000,
                max: 3000,
                desc: "Moderate",
                image: "./assets/Photos/Permits_and_Fees/Permites_and_fees.webp",
            },
            {
                min: 4000,
                max: 8000,
                desc: "Complex",
                image: "./assets/Photos/Permits_and_Fees/Permites_and_fees.webp",
            }
        ]
    },
    {
        
        id: "electrical",
        category: "Electrical",
        list: [
            {
                min: 4000,
                max: 6000,
                desc: "Simple",
                image: "./assets/Photos/Electrical/Electrical.webp",
            },
            {
                min: 8000,
                max: 12000,
                desc: "Moderate",
                image: "./assets/Photos/Electrical/Electrical.webp",
            },
            {
                min: 14000,
                max: 20000,
                desc: "Complex",
                image: "./assets/Photos/Electrical/Electrical.webp",
            }
        ]
    },
    {
        
        id: "removal_disposal",
        category: "Removals, Disposals and Site Prep",
        list: [
            {
                min: 3000,
                max: 6000,
                desc: "Organics, soils, brush",
                image: "./assets/Photos/Removals-disposals/3k_6k.webp",
            },
            {
                min: 7000,
                max: 12000,
                desc: "Includes organics, soils and some concrete",
                image: "./assets/Photos/Removals-disposals/7k_12k.webp",
            },
            {
                min: 12000,
                max: 20000,
                desc: "Includes structures and footings",
                image: "./assets/Photos/Removals-disposals/12k_20k.webp",
            }
        ]
    },
    {
        id: "natural_gas",
        category: "Natural Gas",
        list: [
            {
                min: 2000,
                max: 4000,
                desc: "Simple - Tie into existing line",
                image: "./assets/Photos/Natural_Gas/Natural_Gas.webp",
            },
            {
                min: 4000,
                max: 7000,
                desc: "Medium - New Line installation",
                image: "./assets/Photos/Natural_Gas/Natural_Gas.webp",
            },
            {
                min: 7000,
                max: 12000,
                desc: "Complex - New line installation",
                image: "./assets/Photos/Natural_Gas/Natural_Gas.webp",
            }
        ]
    },
    {
        id: "Plumbing",
        category: "Plumbing",
        list: [
            {
                min: 2000,
                max: 3000,
                desc: "Simple Tandem spigots, Main line extension etc.",
                image: "./assets/Photos/Plumbing/plumbing.webp",
            },
            {
                min: 3000,
                max: 6000,
                desc: "Medium Longer distances, outdoor shower hook up etc",
                image: "./assets/Photos/Plumbing/plumbing.webp",
            },
            {
                min: 8000,
                max: 12000,
                desc: "Complex Several tasks and water lines etc.",
                image: "./assets/Photos/Plumbing/plumbing.webp",
            }
        ]
    },
    {
        id: "paver_patio",
        category: "Paver Patio",
        list: [
            {
                min: 10000,
                max: 15000,
                desc: "Small Patio large enough for dining",
                image: "./assets/Photos/Paver_Patio/10k_15k.webp",
            },
            {
                min: 15000,
                max: 30000,
                desc: "Larger patio for dining and extra lounging",
                image: "./assets/Photos/Paver_Patio/15k_30k.webp",
            },
            {
                min: 30000,
                max: 50000,
                desc: "Extra large patio above 500 sq/ft",
                image: "./assets/Photos/Paver_Patio/30k_50k.webp",
            }
        ]
    },
    {
        id: "side_walkways",
        category: "Side Walkways",
        list: [
            {
                min: 4000,
                max: 7000,
                desc: "stepping stone path",
                image: "./assets/Photos/Side_Walkway/4k_7k.webp",
            },
            {
                min: 8000,
                max: 12000,
                desc: "Paving stone walk without steps",
                image: "./assets/Photos/Side_Walkway/8k_12k.webp",
            },
            {
                min: 15000,
                max: 30000,
                desc: "Complex side yards that require steps, landings and retainment",
                image: "./assets/Photos/Side_Walkway/15k_30k.webp",
            }
        ]
    },
    {
        id: "paver_driveway",
        category: "Paver Driveway",
        list: [
            {
                min: 16000,
                max: 25000,
                desc: "Single vehicle driveway",
                image: "./assets/Photos/Paver_Driveway/16k_25k.webp",
            },
            {
                min: 30000,
                max: 45000,
                desc: "Double vehicle with accents, side step access etc",
                image: "./assets/Photos/Paver_Driveway/30k_45k.webp",
            },
            {
                min: 45000,
                max: 60000,
                desc: "Complex long Drive",
                image: "./assets/Photos/Paver_Driveway/45k_60k.webp",
            }
        ]
    },
    {
        id: "segmental_retaining_walls",
        category: "Segmental Retaining Walls",
        list: [
            {
                min: 15000,
                max: 25000,
                desc: "Simple single tier retaining wall",
                image: "./assets/Photos/Segmental_Retaining_Wall/15k_25k.webp",
            },
            {
                min: 30000,
                max: 45000,
                desc: "Medium A few tiers with simple steps",
                image: "./assets/Photos/Segmental_Retaining_Wall/30k_45k.webp",
            },
            {
                min: 50000,
                max: 80000,
                desc: "Complex Multi tier, stairs, landings",
                image: "./assets/Photos/Segmental_Retaining_Wall/50k_80k.webp",
            }
        ]
    },
    {
        id: "natural_stone_steps",
        category: "Natural Stone Steps",
        list: [
            {
                min: 6000,
                max: 8000,
                desc: "Simple set of natural steps to a raised patio or an entryway",
                image: "./assets/Photos/Natural_Stone_Steps/6k_8k.webp",
            },
            {
                min: 10000,
                max: 15000,
                desc: "Medium size natural steps for larger wall access, higher raised patios etc.",
                image: "./assets/Photos/Natural_Stone_Steps/10k_15k.webp",
            },
            {
                min: 18000,
                max: 25000,
                desc: "Complex Multiple areas, entries, elevations etc.",
                image: "./assets/Photos/Natural_Stone_Steps/18k_25k.webp",
            }
        ]
    },
    {
        id: "water_feature",
        category: "Water Feature",
        list: [
            {
                min: 6000,
                max: 10000,
                desc: "Simple Water feature. Bubbling rocks, pondless basin etc",
                image: "./assets/Photos/Water_Feature/6k_10k.webp",
            },
            {
                min: 11500,
                max: 20000,
                desc: "Basalt columns or small pond",
                image: "./assets/Photos/Water_Feature/11k_20k.webp",
            },
            {
                min: 20000,
                max: 40000,
                desc: "Large water feature with stream, pond and waterfall",
                image: "./assets/Photos/Water_Feature/20k_40k.webp",
            }
        ]
    },
    {
        id: "outdoor_kitchens",
        category: "Outdoor Kitchens (Gas hookup and Appliances extra)",
        list: [
            {
                min: 13000,
                max: 18000,
                desc: "Simple BBQ Surround or sit up bar, modular",
                image: "./assets/Photos/Outdoor_Kitchen/13k_18k.webp",
            },
            {
                min: 18000,
                max: 24000,
                desc: "Moderate size for BBQ, sink and other appliances. Veneer surround and stone counter",
                image: "./assets/Photos/Outdoor_Kitchen/18k_24k.webp",
            },
            {
                min: 28000,
                max: 45000,
                desc: "Complete outdoor kitchen to fit BBQ, cabinets, fridge, Pizza oven etc. with stone countertop and veneer stone surround",
                image: "./assets/Photos/Outdoor_Kitchen/28k_45k.webp",
            }
        ]
    },
    {
        id: "Pergolas",
        category: "Pergolas",
        list: [
            {
                min: 10000,
                max: 15000,
                desc: "Western Red cedar frame 12' x 14'",
                image: "./assets/Photos/Pergolas/10k_15k.webp",
            },
            {
                min: 15000,
                max: 21000,
                desc: "Western Red cedar frame with screen 16' x16'",
                image: "./assets/Photos/Pergolas/15k_21k.webp",
            },
            {
                min: 25000,
                max: 40000,
                desc: "Large timber pergola with stone veneer base and screen",
                image: "./assets/Photos/Pergolas/25k_40k.webp",
            }
        ]
    },
    {
        id: "fire_feature",
        category: "Fire Feature (Gas hookup extra)",
        list: [
            {
                min: 5000,
                max: 9000,
                desc: "Wood burning brick fire pit or gas fire table (Gas hookup extra)",
                image: "./assets/Photos/Fire_Feature/5k_9k.webp",
            },
            {
                min: 12000,
                max: 18000,
                desc: "Gas firepit with stone veneer or precast surround (gas hookup extra)",
                image: "./assets/Photos/Fire_Feature/12k_18k.webp",
            }
        ]
    },
    {
        id: "low_voltage_landscape_lighting",
        category: "Low Voltage Landscape Lighting",
        list: [
            {
                min: 6000,
                max: 8000,
                desc: "Simple lighting package with 8 - 12 LED lighting fixtures",
                image: "./assets/Photos/Low_Voltage_Landscape_Lighting/6k_8k.webp",
            },
            {
                min: 10000,
                max: 15000,
                desc: "Lighting Package with 15- 30 LED light fixtures",
                image: "./assets/Photos/Low_Voltage_Landscape_Lighting/10k_15k.webp",
            },
            {
                min: 15000,
                max: 25000,
                desc: "Larger Package with different zones, bluetooth control and 30 - 40 LED light fixtures",
                image: "./assets/Photos/Low_Voltage_Landscape_Lighting/15k_25k.webp",
            }
        ]
    },
    {
        id: "Irrigation",
        category: "Irrigation",
        list: [
            {
                min: 6000,
                max: 9000,
                desc: "Standard 2 to 4 zone System",
                image: "./assets/Photos/Irrigation/6k_9k.webp",
            },
            {
                min: 12000,
                max: 19000,
                desc: "Moderate 6 to 10 Zone System",
                image: "./assets/Photos/Irrigation/12k_19k.webp",
            },
            {
                min: 22000,
                max: 30000,
                desc: "Complex systems above 12 zones",
                image: "./assets/Photos/Irrigation/22k_30k.webp",
            }
        ]
    },
    {
        id: "Gardens",
        category: "Gardens (Including soil and Mulch)",
        list: [
            {
                min: 8000,
                max: 12000,
                desc: "Small Backyard garden with a few trees and a selection of shrubs and perenials",
                image: "./assets/Photos/Gardens_Including-soil-and-mulch/8k_12k.webp",
            },
            {
                min: 15000,
                max: 25000,
                desc: "Medium size backyard, minimal front and a mix of Winter interest, seasonal color and perennials",
                image: "./assets/Photos/Gardens_Including-soil-and-mulch/15k_25k.webp",
            },
            {
                min: 30000,
                max: 50000,
                desc: "Large front and backyard, with extensive gardens, Evergreen, shrubs, specimen trees, shade trees, annuals and perrenials",
                image: "./assets/Photos/Gardens_Including-soil-and-mulch/30k_50k.webp",
            }
        ]
    },
    {
        id: "sod_grading",
        category: "Sod and Grading",
        list: [
            {
                min: 3500,
                max: 6000,
                desc: "Small Backyard with minimal repair and sod ",
                image: "./assets/Photos/Sod_and_Grading/3.5k_6k.webp",
            },
            {
                min: 8000,
                max: 12000,
                desc: "Medium Backyard and side access repairs including sod and some garden",
                image: "./assets/Photos/Sod_and_Grading/8k_12k.webp",
            },
            {
                min: 15000,
                max: 20000,
                desc: "Large post project grading, sod and garden replacement",
                image: "./assets/Photos/Sod_and_Grading/15k_20k.webp",
            }
        ]
    },
    {
        id: "garden_edging",
        category: "Garden Edging",
        list: [
            {
                min: 3500,
                max: 18000,
                desc: "Decorative carved stone curbing",
                image: "./assets/Photos/Garden_Edging/3.5k_18k.webp",
            },
            {
                min: 5000,
                max: 15000,
                desc: "Steel Edging",
                image: "./assets/Photos/Garden_Edging/5k_15k.webp",
            },
            {
                min: 3000,
                max: 13000,
                desc: "Brick Edging",
                image: "./assets/Photos/Garden_Edging/3k_13k.webp",
            }
        ]
    },
]

