export interface Workplace {
  position: number;
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
