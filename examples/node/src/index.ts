import axios from 'axios'
import api from '../apis/$api'
import { HogeId } from '../apis/@types'

axios.defaults.baseURL = 'https://example.com/api'
;(async () => {
  const res0 = await api()
    .v1_1.$2._hogeId(HogeId.HOGE)
    .entries_json.get()
  console.log(res0)

  const res1 = await api()
    .v1_1.$2._hogeId(HogeId.BUZZ)
    .entries_json.$get()
  console.log(res1)

  const res2 = await api()
    .v1_1.users._userId(1)
    .post(null, { params: { aa: 2 } })
  console.log(res2)

  const res3 = await api().post({ name: 'mario' }, { params: { aa: 0 } })
  console.log(res3)

  const res4 = await api()
    .v1_1.$2._hogeId(HogeId.FIZZ)
    .test_4.fuga_aa.$delete({
      params: { aa: 2 },
      data: { name: 'hanako' }
    })
  console.log(res4)
})()
