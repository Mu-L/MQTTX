// see https://typeorm.io/#/entities/column-types-for-sqlite--cordova--react-native--expo
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import MessageEntity from './MessageEntity'
import SubscriptionEntity from './SubscriptionEntity'
import CollectionEntity from './CollectionEntity'
import WillEntity from './WillEntity'
@Entity('ConnectionEntity')
export default class ConnectionEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id?: number

  @Column({ type: 'varchar' })
  clientId!: string

  @Column({ type: 'varchar' })
  name!: string

  @Column({ type: 'boolean', default: true })
  clean!: boolean

  @Column({ type: 'varchar' })
  protocol!: string

  @Column({ type: 'varchar' })
  host!: string

  @Column({ type: 'integer' })
  port!: number

  @Column({ type: 'integer', default: 60 })
  keepalive!: number

  @Column({ type: 'integer' })
  connectTimeout!: number

  @Column({ type: 'boolean' })
  reconnect!: boolean

  @Column({ type: 'varchar' })
  username!: string

  @Column({ type: 'varchar' })
  password!: string

  @Column({ type: 'varchar' })
  path!: string

  @Column({ type: 'varchar' })
  certType!: string

  @Column({ type: 'boolean' })
  ssl!: boolean

  @Column({ type: 'varchar' })
  mqttVersion!: string

  @Column({ type: 'integer' })
  unreadMessageCount!: number

  @Column({ type: 'boolean' })
  clientIdWithTime!: boolean

  @ManyToOne(() => CollectionEntity, (collection) => collection.collections)
  collection!: ConnectionEntity

  @Column({ type: 'integer', comment: 'order in the collection' })
  orderId!: number

  @Column({ type: 'boolean' })
  rejectUnauthorized!: boolean

  @Column({ type: 'varchar' })
  ca!: string

  @Column({ type: 'varchar' })
  cert!: string

  @Column({ type: 'varchar' })
  key!: string

  @OneToOne(() => WillEntity, (will) => will.connection)
  @JoinColumn()
  will!: WillEntity

  @OneToMany(() => MessageEntity, (message) => message.connection)
  messages!: MessageEntity[]

  @OneToMany(() => SubscriptionEntity, (subscription) => subscription.connection)
  subscriptions!: SubscriptionEntity[]

  @Column({ type: 'datetime' })
  createAt!: string

  @Column({ type: 'datetime' })
  updateAt!: string
}