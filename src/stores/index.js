import { useConfigStore } from '@/stores/config.store'

export default () => {
  useConfigStore().fetch()
}