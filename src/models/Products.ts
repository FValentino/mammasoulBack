const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm")

@Entity()
class Product {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column("decimal")
  price!: number

  @Column()
  description!: string
}

module.exports = Product