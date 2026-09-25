import api from './api';
import { Business, ApiResponse } from '../types';

export const fallbackBusinesses: Business[] = [
  {
    id: "fleet",
    title: "aproxio fleet",
    subtitle: "autonomous delivery matrix",
    status: "Coming Soon",
    codename: "PROJECT VALKYRIE-9",
    launchWindow: "Q3 2026",
    clearanceLevel: "TIER-1 RESTRICTED",
    tagline: "Next-Gen Autonomous Delivery Corridors",
    description: "Engineering low-altitude autonomous aerial systems and sidewalk robotic rovers for zero-emission, sub-15-minute last-mile delivery.",
    color: "#7293F3",
    link: "#fleet",
    classifiedSpec: {
      label: "Propulsion & Swarm Protocol",
      redactedValue: "████████████████ [CONFIDENTIAL]",
      revealedValue: "VTOL Micro-Turbine + P2P Mesh Swarm",
    },
    telemetry: [
      { label: "Transit Time", value: "< 14 mins" },
      { label: "Autonomy Level", value: "SAE Level 5" },
      { label: "Carbon Offset", value: "-98.4%" },
    ],
    dossier: {
      mission: "Aproxio Fleet replaces diesel courier vans with whisper-quiet, GPS-denied autonomous drones and sidewalk pods navigating complex urban topographies with millisecond collision avoidance.",
      architecture: [
        "Distributed Low-Altitude Drone Corridors with Dynamic Geofencing",
        "Dual-Redundant Vision-Inertial Odometry + Solid-State LiDAR",
        "Zero-Human Rapid Cargo Handoff Pad Architecture"
      ],
      readiness: 78,
      targetDeployment: "Phase 1: Metropolitan Alpha Trial (Q3 2026)"
    }
  },
  {
    id: "core",
    title: "aproxio core",
    subtitle: "neural supply intelligence",
    status: "Coming Soon",
    codename: "SYNAPSE MATRIX-X",
    launchWindow: "Q4 2026",
    clearanceLevel: "CONFIDENTIAL INTEL",
    tagline: "Hyper-Predictive AI Logistics Engine",
    description: "Deep reinforcement learning models predicting neighborhood-level demand with sub-second accuracy across micro-fulfillment centers.",
    color: "#10B981",
    link: "#core",
    classifiedSpec: {
      label: "Neural Architecture",
      redactedValue: "████████████████ [CLASSIFIED]",
      revealedValue: "Sparse Tensor MoE with 48B Parameters",
    },
    telemetry: [
      { label: "Inference Latency", value: "0.84 ms" },
      { label: "Demand Accuracy", value: "99.2%" },
      { label: "Re-routing Speed", value: "Real-time" },
    ],
    dossier: {
      mission: "Aproxio Core acts as the autonomous central nervous system for supply chains, predicting hyper-local consumer purchasing surges hours before orders are placed to pre-position stock automatically.",
      architecture: [
        "Edge-deployed Transformer Models for Micro-Fulfillment Nodes",
        "Dynamic Multi-Commodity Network Flow Optimization",
        "Autonomous Warehouse Dispatch API with Sub-second SLAs"
      ],
      readiness: 84,
      targetDeployment: "Phase 2: Closed Beta with Tier-1 Retailers (Q4 2026)"
    }
  },
  {
    id: "cleangrid",
    title: "aproxio cleangrid",
    subtitle: "decarbonized infrastructure",
    status: "Coming Soon",
    codename: "HELIOS GRID-ZERO",
    launchWindow: "Q4 2026",
    clearanceLevel: "PATENT PENDING",
    tagline: "Renewable Swappable Battery Microgrids",
    description: "Distributed rapid battery-swap hubs powered 100% by solar microgrids, accelerating fleet transition to net-zero urban mobility.",
    color: "#F59E0B",
    link: "#cleangrid",
    classifiedSpec: {
      label: "Cell Chemistry & Cycle",
      redactedValue: "████████████████ [TOP SECRET]",
      revealedValue: "Semi-Solid State Li-Metal (4,500 Cycles)",
    },
    telemetry: [
      { label: "Swap Duration", value: "38 Seconds" },
      { label: "Solar Autonomy", value: "100% Off-Grid" },
      { label: "Energy Density", value: "480 Wh/kg" },
    ],
    dossier: {
      mission: "Aproxio Cleangrid builds decentralized robotic battery-swapping kiosks that operate as mini virtual power plants (VPP), trading green solar surplus while swapping courier power modules in under a minute.",
      architecture: [
        "Robotic 6-Axis Modular Cell Exchanger with Biometric Lock",
        "AI Battery Health & Thermal Degradation Telemetry",
        "Bi-Directional V2G (Vehicle-to-Grid) Urban Stabilization"
      ],
      readiness: 71,
      targetDeployment: "Phase 1 Pilot: Sunbelt Urban Hubs (Q4 2026)"
    }
  },
  {
    id: "horizon",
    title: "aproxio horizon",
    subtitle: "omnichannel commerce protocol",
    status: "Coming Soon",
    codename: "NEXUS PROTOCOL-V",
    launchWindow: "H1 2027",
    clearanceLevel: "STEALTH ENCRYPTED",
    tagline: "Sovereign Retail Operating System",
    description: "Headless commerce architecture uniting physical store inventories with high-velocity on-demand local dispatch networks.",
    color: "#8B5CF6",
    link: "#horizon",
    classifiedSpec: {
      label: "Consensus & Ledger",
      redactedValue: "████████████████ [ENCRYPTED]",
      revealedValue: "High-Throughput Zero-Knowledge Settlement",
    },
    telemetry: [
      { label: "Sync Latency", value: "< 12 ms" },
      { label: "TPS Capacity", value: "45,000 TPS" },
      { label: "Merchant Onboard", value: "1-Click API" },
    ],
    dossier: {
      mission: "Aproxio Horizon eliminates legacy retail inventory silos by converting physical retail shelves into live, unified hyper-local digital warehouses connected directly to instant courier swarms.",
      architecture: [
        "Headless Real-time POS State Synchronization Engine",
        "Cryptographic Inventory Lockouts to Prevent Overselling",
        "Dynamic Multi-Store Basket Splitting & Bundling Algorithm"
      ],
      readiness: 65,
      targetDeployment: "Enterprise Stealth Sandbox (H1 2027)"
    }
  },
  {
    id: "vault",
    title: "aproxio vault",
    subtitle: "automated micro-warehousing",
    status: "Coming Soon",
    codename: "AEGIS CYLINDER-9",
    launchWindow: "H2 2027",
    clearanceLevel: "LABS RESTRICTED",
    tagline: "Vertical High-Density Robotic Storage",
    description: "High-efficiency vertical robotic picking systems maximizing inner-city square footage to fulfill inventory in under 60 seconds.",
    color: "#EC4899",
    link: "#vault",
    classifiedSpec: {
      label: "Kinematic Retrieval",
      redactedValue: "████████████████ [LAB CLEARANCE]",
      revealedValue: "Magnetic Levitation 3D Shuttles (15 m/s)",
    },
    telemetry: [
      { label: "Pick Speed", value: "< 24 secs" },
      { label: "Space Utilization", value: "+850%" },
      { label: "Power Draw", value: "0.2 kWh / bin" },
    ],
    dossier: {
      mission: "Aproxio Vault transforms vacant underground car parks and vertical shafts into 24/7 dark micro-fulfillment hubs where maglev robotic shuttles retrieve products in seconds without human touch.",
      architecture: [
        "Linear Induction Magnetic Shuttles with 3-Axis Freedom",
        "Automated Laser Packaging & Sealing Gantry",
        "Continuous AI Inventory Reshuffling based on Demand Probability"
      ],
      readiness: 59,
      targetDeployment: "Urban Underground Proof-of-Concept (H2 2027)"
    }
  }
];

export const getBusinesses = async (): Promise<Business[]> => {
  try {
    const response = await api.get<ApiResponse<Business[]>>('/businesses');
    const backendData = response.data.data;
    if (Array.isArray(backendData) && backendData.length > 0) {
      return backendData.map(item => {
        const fallback = fallbackBusinesses.find(f => f.id === item.id) || {};
        return {
          ...fallback,
          ...item,
          status: item.status || fallback.status || "Coming Soon",
          codename: fallback.codename,
          launchWindow: fallback.launchWindow,
          clearanceLevel: fallback.clearanceLevel,
          classifiedSpec: fallback.classifiedSpec,
          telemetry: fallback.telemetry,
          dossier: fallback.dossier,
        };
      });
    }
    return fallbackBusinesses;
  } catch (error: any) {
    console.warn('Backend unavailable, using fallback upcoming projects data:', error?.message);
    return fallbackBusinesses;
  }
};

