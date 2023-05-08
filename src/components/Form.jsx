import Select from "react-select";
import {MobileDateTimePicker} from "@mui/x-date-pickers";
import {useState} from "react";
import {towerOptions, floorOptions, roomOptions} from '../Options'
import styles from './Form.module.css'
import dayjs from "dayjs";

const clearData = {
    tower: "",
    floor: "",
    room: "",
    dateTime: dayjs(null),
    comment: ""
}

export const Form = () => {
    const [data, setData] = useState(clearData)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(data))
        setData(clearData)
    }

    const handleReset = (e) => {
        e.preventDefault()
        setData(clearData)
    }


    return(
        <div className={styles.cont}>
            <form className={styles.form}>
                <p>Бронирование переговорной</p>
                <Select value={data.tower ? towerOptions.find(c => c.value === data.tower) : null} className={styles.select} placeholder='Башня' options={towerOptions} onChange={opt => setData(prev => ({...prev, tower: opt.value}))}/>
                <Select value={data.floor ? towerOptions.find(c => c.value === data.floor) : null} className={styles.select} placeholder='Этаж' options={floorOptions} onChange={opt => setData(prev => ({...prev, floor: opt.value}))}/>
                <Select value={data.room ? towerOptions.find(c => c.value === data.room) : null} className={styles.select} placeholder='Переговорная' options={roomOptions} onChange={opt => setData(prev => ({...prev, room: opt.value}))}/>
                <div className={styles.dateCont}>
                    <MobileDateTimePicker value={data.dateTime} className={styles.date} disablePast onChange={opt => setData(prev => ({...prev, dateTime: opt}))}/>
                </div>
                <textarea value={data.comment} className={[styles.select, styles.input].join(' ')} placeholder='Комментарий' onChange={e => setData(prev => ({...prev, comment: e.target.value}))}/>
                <div className={styles.btnCont}>
                    <button className={[styles.btn, styles.accept].join(' ')} onClick={handleSubmit}>Отправить</button>
                    <button className={[styles.btn, styles.reset].join(' ')} onClick={handleReset}>Очистить</button>
                </div>
            </form>
        </div>
    )
}