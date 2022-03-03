export interface Intervention {
  id?: number;
  f_Name: string;
  l_Name: string;
  admission_Date: string;
  clinique?: number;
  ref: string;
  motif: string;
  diag: string;
  examen_Clinique: string;
  biologie_hb?: string;
  biologie_gb?: string;
  biologie_plg?: string;
  biologie_uree?: string;
  biologie_crea?: string;
  biologie_na?: string;
  biologie_k?: string;
  biologie_ca?: string;
  biologie_glycemie?: string;
  biologie_tp?: string;
  biologie_inr?: string;
  biologie_tck?: string;
  biologie_crp?: string;
  biologie_other?: string;
  radiologie: string;
  operateur: string;
  mutualiste: string;
  conclusion: string;
  maj: string;
  honoraire?: number;
  remise?: number;
  status?: number;

}

