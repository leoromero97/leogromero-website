import { CategoryTypes } from "../pill/types"

export type CardServiceProps = {
  categoryLabel: string
  category: CategoryTypes
  title: string
  href?: string
  id: string
}
