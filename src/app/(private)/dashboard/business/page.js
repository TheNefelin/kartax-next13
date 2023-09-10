//components 
import FrmBussines from "@/components/FrmBusiness"
import Table from "@/components/Table"
//fetching class
import FetchingApi from "@/context/FetchingApi"
//css
import styles from "./page.module.css"
import style_btn from "@/css/Btn.module.css"

export default async function page() {
  const fetchingApi = new FetchingApi()
  const result = await fetchingApi.get_business_byid_user(1)
  const data = await result.json()

  const getData = async (id_negocio) => {
    return Promise.all([
      fetchingApi.get_items_grp_byid_business(id_negocio).then(data => data.json()),
      fetchingApi.get_items_categ_byid_business(id_negocio).then(data => data.json()),
      fetchingApi.get_items_byid_business(id_negocio).then(data => data.json()),
    ])
  }

  const myData = await getData(1)

  return (
    <section className={styles.business}>
      <input className={`${style_btn.btn}`} type="submit" value="&#10010; Nuevo Negocio" />
      <div className={styles.frm}>
        <FrmBussines></FrmBussines>
      </div>
      <Table tabla={data}></Table>
      <Table tabla={myData[0]}></Table>
      <Table tabla={myData[1]}></Table>
      <Table tabla={myData[2]}></Table>
    </section>
  )
}
