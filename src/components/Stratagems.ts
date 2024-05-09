// Enums for stratagems
export enum Stratagem {
  Lift850JumpPack = "LIFT-850 Jump Pack",
  B1SupplyPack = "B-1 Supply Pack",
  AX_LAS5GuardDog = "AX/LAS-5 'Guard Dog'",
  SH20BallisticShield = "SH-20 Ballistic Shield Backpack",
  SH32ShieldGenerator = "SH-32 Shield Generator Pack",
  AX_AR23GuardDog = "AX/AR-23 'Guard Dog'",
  APW_1_Anti_Materiel_Rifle = "APW-1 Anti-Materiel Rifle",
  EAT_17 = "EAT-17 Expendable Anti-tank",
  REINFORCE = "Reinforce",
  NUX_223_HELLBOMB = "NUX-223 Hellbomb",
  RESUPPLY = "Resupply",
  EAGLE_REARM = "EAGLE_REARM",
  SSSD_DELIVERY = "SSSD_DELIVERY",
  SEISMIC_PROBE = "SEISMIC_PROBE",
  SOS_BEACON = "SOS_BEACON",
  A_AC_8_AUTOMATON = "A/AC-8 Autocannon Sentry",
  A_G_16_Gatling_Sentry = "A/G-16 Gatling Sentry",
  FX_12_Shield_Generator_Relay = "FX-12 Shield Generator Relay",
  //
  MD_I4_Incendiary_Mines = "MD-I4 Incendiary Mines",
  MD_6 = "MD-6 Anti-Personnel Minefield",
  A_MG_43_Machine_Gun_Sentry = "A/MG-43 Machine Gun Sentry",
  A_M_23_EMS_Mortar_Sentry = "A/M-23 EMS Mortar Sentry",
  A_M_12_Mortar_Sentry = "A/M-12 Mortar Sentry",
  E_MG_101_HMG_Emplacement = "	E/MG-101 HMG Emplacement",
  ORBITAL_380MM_HE_BARRAGE = "Orbital 380mm HE Barrage",
  //
  EAGLE_STRAFING_RUN = "Eagle Strafing Run",
}

// Importing image assets
import Lift850JumpPackImg from "../assets/strategems/supply/backpack/LIFT-850_Jump-Pack.png";
import B1SupplyPackImg from "../assets/strategems/supply/backpack/B-1_Supply-Pack.png";
import AX_LAS5GuardDogImg from "../assets/strategems/supply/backpack/AX_LAS-5_Guard-Dog-Rover.png";
import SH20BallisticShieldImg from "../assets/strategems/supply/backpack/SH-20_Ballistic-Shield-Backpack.png";
import SH32ShieldGeneratorImg from "../assets/strategems/supply/backpack/SH-32_Shield-Generator-Pack.png";
import AX_AR23GuardDogImg from "../assets/strategems/supply/backpack/AX_AR-23_Guard-Dog.png";
import APW1_AntiMaterielRifleImg from "../assets/strategems/supply/support-weapons/SUPPLY (1).png";
import EAT_17_Img from "../assets/strategems/supply/support-weapons/SUPPLY (2).png";
import REINFORCE_Img from "../assets/strategems/mission/Reinforce.png";
import SUPPORT_2_Img from "../assets/strategems/mission/SUPPORT (2).png";
import RESUPPLY_Img from "../assets/strategems/mission/SUPPORT (3).png";
import SUPPORT_6_Img from "../assets/strategems/mission/SUPPORT (6).png";
import SUPPORT_7_Img from "../assets/strategems/mission/SUPPORT (7).png";
import SUPPORT_9_Img from "../assets/strategems/mission/SUPPORT (9).png";
import SUPPORT_10_Img from "../assets/strategems/mission/SUPPORT (10).png";
import DEFENSIVE_1_Img from "../assets/strategems/defensive/DEFENSIVE (1).png";
import GATTLING_SENTRY_Img from "../assets/strategems/defensive/DEFENSIVE (2).png";
import SHIELD_GENERATOR_RELAY_Img from "../assets/strategems/defensive/DEFENSIVE (3).png";
import MD_I4_Incendiary_Mines_Img from "../assets/strategems/defensive/DEFENSIVE (4).png";
import MD_6_Img from "../assets/strategems/defensive/DEFENSIVE (5).png";
import A_MG_43_Machine_Gun_Sentry_Img from "../assets/strategems/defensive/DEFENSIVE (6).png";
import A_M_23_EMS_Mortar_Sentry_Img from "../assets/strategems/defensive/DEFENSIVE (7).png";
import A_M_12_Mortar_Sentry_Img from "../assets/strategems/defensive/DEFENSIVE (8).png";
import E_MG_101_HMG_Emplacement_Img from "../assets/strategems/defensive/DEFENSIVE (11).png";
import ORBITAL_380MM_HE_BARRAGE_Img from "../assets/strategems/offensive/orbital/OFFENSIVE (10).png";
import EAGLE_STRAFING_RUN_Img from "../assets/strategems/offensive/eagle/OFFENSIVE (7).png";

// https://helldivers.fandom.com/wiki/Stratagem_Codes_(Helldivers_2)
export const stratagemDetails: Record<
  Stratagem,
  { sequence: string[]; image: string; category: string }
> = {
  [Stratagem.Lift850JumpPack]: {
    sequence: ["down", "up", "up", "down", "up"],
    image: Lift850JumpPackImg,
    category: "supply/backpack",
  },
  [Stratagem.B1SupplyPack]: {
    sequence: ["down", "left", "down", "up", "up", "down"],
    image: B1SupplyPackImg,
    category: "supply/backpack",
  },
  [Stratagem.AX_LAS5GuardDog]: {
    sequence: ["down", "up", "left", "up", "right", "right"],
    image: AX_LAS5GuardDogImg,
    category: "supply/backpack",
  },
  [Stratagem.SH20BallisticShield]: {
    sequence: ["down", "left", "down", "down", "up", "left"],
    image: SH20BallisticShieldImg,
    category: "supply/backpack",
  },
  [Stratagem.SH32ShieldGenerator]: {
    sequence: ["down", "up", "left", "right", "left", "right"],
    image: SH32ShieldGeneratorImg,
    category: "supply/backpack",
  },
  [Stratagem.AX_AR23GuardDog]: {
    sequence: ["down", "up", "left", "up", "right", "down"],
    image: AX_AR23GuardDogImg,
    category: "supply/backpack",
  },
  [Stratagem.APW_1_Anti_Materiel_Rifle]: {
    sequence: ["down", "left", "right", "up", "down"],
    image: APW1_AntiMaterielRifleImg,
    category: "supply/support-weapons",
  },
  [Stratagem.EAT_17]: {
    sequence: ["down", "down", "left", "up", "right"],
    image: EAT_17_Img,
    category: "supply/support-weapons",
  },
  [Stratagem.REINFORCE]: {
    sequence: ["up", "down", "right", "left", "up"],
    image: REINFORCE_Img,
    category: "mission",
  },
  [Stratagem.NUX_223_HELLBOMB]: {
    sequence: ["down", "up", "left", "down", "up", "right", "down", "up"],
    image: SUPPORT_2_Img,
    category: "mission",
  },
  [Stratagem.RESUPPLY]: {
    sequence: ["down", "down", "up", "right"],
    image: RESUPPLY_Img,
    category: "mission",
  },
  [Stratagem.EAGLE_REARM]: {
    sequence: ["up", "up", "left", "up", "right"],
    image: SUPPORT_6_Img,
    category: "mission",
  },
  [Stratagem.SSSD_DELIVERY]: {
    sequence: ["down", "down", "down", "up", "up"],
    image: SUPPORT_7_Img,
    category: "mission",
  },
  [Stratagem.SEISMIC_PROBE]: {
    sequence: ["up", "up", "left", "right", "down", "down"],
    image: SUPPORT_9_Img,
    category: "mission",
  },
  [Stratagem.SOS_BEACON]: {
    sequence: ["up", "down", "right", "up"],
    image: SUPPORT_10_Img,
    category: "mission",
  },
  [Stratagem.A_AC_8_AUTOMATON]: {
    sequence: ["down", "up", "right", "up", "left", "up"],
    image: DEFENSIVE_1_Img,
    category: "defensive",
  },
  [Stratagem.MD_I4_Incendiary_Mines]: {
    sequence: ["down", "right", "right", "down"],
    image: MD_I4_Incendiary_Mines_Img,
    category: "defensive",
  },
  [Stratagem.MD_6]: {
    sequence: ["down", "left", "up", "right"],
    image: MD_6_Img,
    category: "defensive",
  },
  [Stratagem.A_MG_43_Machine_Gun_Sentry]: {
    sequence: ["down", "up", "right", "right", "up"],
    image: A_MG_43_Machine_Gun_Sentry_Img,
    category: "defensive",
  },
  [Stratagem.A_M_23_EMS_Mortar_Sentry]: {
    sequence: ["down", "up", "right", "down", "right"],
    image: A_M_23_EMS_Mortar_Sentry_Img,
    category: "defensive",
  },
  [Stratagem.A_M_12_Mortar_Sentry]: {
    sequence: ["down", "up", "right", "right", "down"],
    image: A_M_12_Mortar_Sentry_Img,
    category: "defensive",
  },
  [Stratagem.E_MG_101_HMG_Emplacement]: {
    sequence: ["down", "up", "left", "right", "right", "left"],
    image: E_MG_101_HMG_Emplacement_Img,
    category: "defensive",
  },
  [Stratagem.A_G_16_Gatling_Sentry]: {
    sequence: ["down", "up", "right", "left"],
    image: GATTLING_SENTRY_Img,
    category: "defensive",
  },
  [Stratagem.FX_12_Shield_Generator_Relay]: {
    sequence: ["down", "down", "left", "right", "left", "right"],
    image: SHIELD_GENERATOR_RELAY_Img,
    category: "defensive",
  },
  [Stratagem.ORBITAL_380MM_HE_BARRAGE]: {
    sequence: ["right", "down", "left", "up", "up"],
    image: ORBITAL_380MM_HE_BARRAGE_Img,
    category: "offensive/orbital",
  },
  [Stratagem.EAGLE_STRAFING_RUN]: {
    sequence: ["up", "right", "right"],
    image: EAGLE_STRAFING_RUN_Img,
    category: "offensive/eagle",
  },
};
