import { v4 as uuidV4 } from "uuid";

import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ name: "driver_license" })
  driverLicense: string;

  @Column({ name: "is_admin", default: false })
  isAdmin: boolean;

  @Column({ nullable: true })
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
