import { Stratagem } from "./Stratagems";
import { atomWithStorage } from "jotai/utils";

// Initialize all stratagems as not selected
const initialStratagemState: Record<Stratagem, boolean> = {
    [Stratagem.Lift850JumpPack]: false,
    [Stratagem.B1SupplyPack]: false,
    [Stratagem.AX_LAS5GuardDog]: false,
    [Stratagem.SH20BallisticShield]: false,
    [Stratagem.SH32ShieldGenerator]: false,
    [Stratagem.AX_AR23GuardDog]: false,
    [Stratagem.APW_1_Anti_Materiel_Rifle]: false,
    [Stratagem.EAT_17]: false,
    [Stratagem.REINFORCE]: false,
    [Stratagem.NUX_223_HELLBOMB]: false,
    [Stratagem.RESUPPLY]: false,
    [Stratagem.EAGLE_REARM]: false,
    [Stratagem.SSSD_DELIVERY]: false,
    [Stratagem.SEISMIC_PROBE]: false,
    [Stratagem.SOS_BEACON]: false,
    [Stratagem.A_AC_8_AUTOMATON]: false,
    [Stratagem.A_G_16_Gatling_Sentry]: false,
    [Stratagem.FX_12_Shield_Generator_Relay]: false,
    [Stratagem.MD_I4_Incendiary_Mines]: false,
    [Stratagem.MD_6]: false,
    [Stratagem.A_MG_43_Machine_Gun_Sentry]: false,
    [Stratagem.A_M_23_EMS_Mortar_Sentry]: false,
    [Stratagem.A_M_12_Mortar_Sentry]: false,
    [Stratagem.E_MG_101_HMG_Emplacement]: false,
    [Stratagem.ORBITAL_380MM_HE_BARRAGE]: false,
    [Stratagem.EAGLE_STRAFING_RUN]: false
};

export const stratagemStateAtom = atomWithStorage("bob", initialStratagemState);
