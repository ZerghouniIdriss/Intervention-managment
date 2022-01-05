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
  radiologie: string;
  operateur: string;
  mutualiste: string;
  conclusion: string;
  maj: string;
  honoraire?: number;
  remise?: number;
  status?: number;
}

