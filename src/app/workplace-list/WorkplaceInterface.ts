export interface Workplace {
  id: string;
  identifier: string;
  equipments: Equipment[];
}
export interface Equipment {
  wokrplaceEquipmentId: string;
  equipmentId: string;
  name: string;
  description: string;
  amount: number;
}
