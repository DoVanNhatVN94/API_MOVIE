import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Cascader, DatePicker, InputNumber, Select } from 'antd';
import manager from '../../API/API';
import { Formik, useFormik } from 'formik';
import moment from 'moment';

export default function AdminShowTime(props) {

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                let result = await manager.taoLichChieu(values);
                alert(result.data.content)
            } catch (error) {
                console.log(error)
            }
        }
    })

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    });
    // console.log(state.heThongRapChieu);

    useEffect(() => {
        try {
            async function fetchMyAPI() {
                let result = await manager.layThongTinhHeThongRap();
                setState({
                    ...state,
                    heThongRapChieu: result.data.content
                })
            }
            fetchMyAPI()
        } catch (error) {
            console.log(error)
        }

        // async function fetchMyAPI() {
        //     let result = await manager.layThongTinhHeThongRap();
        //     setState({
        //         ...state,
        //         heThongRapChieu: result.data.content
        //     })
        // }
        // fetchMyAPI()



        // try {
        //     let result = await manager.layDanhSachHeThongRap();
        //     setState({
        //         ...state,
        //         heThongRapChieu:result.data.content
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    }, [])

    const handleChangeHeThongRap = async (value) => {
        console.log(value);
        try {
            let result = await manager.layThongTinCumRap(value);
            // console.log(result.data.content);
            setState({
                ...state,
                cumRapChieu: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap',value)
    }

    const onOk = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
        console.log(moment(value).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onChangeDate = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
        console.log(moment(value).format('DD/MM/YYYY hh:mm:ss'))
    }

    const handleChangeInputNumber = (value) => {
        formik.setFieldValue('giaVe', value)
    }

    const convertSelectHTR = () => {
        // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.maHeThongRap }))
        return state.heThongRapChieu?.map((htr) => {
            return {
                label: htr.tenHeThongRap,
                value: htr.maHeThongRap
            }
        })
    }

    let film = {}
    if (localStorage.getItem('filmParams')) {
        film = JSON.parse(localStorage.getItem('filmParams'))
    }

    return (
        <div>
            <Form
                name="basic"
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <h2>Tạo lịch chiếu - {film.tenPhim}</h2>
                <img src={film.hinhAnh} alt="..." width={100} height={150}  />

                <Form.Item label="Hệ thống rạp" >
                    <Select style={{ width: 300 }} options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                </Form.Item>

                <Form.Item label="Cụm rạp" >
                    <Select style={{ width: 300 }} options={state.cumRapChieu?.map((cumRap) => ({ label: cumRap.tenCumRap, value: cumRap.maCumRap }))} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />
                </Form.Item>

                <Form.Item label="Ngày chiếu, giờ chiếu" >
                    <DatePicker showTime onChange={onChangeDate} onOk={onOk} />
                </Form.Item>

                <Form.Item label="Giá vé" >
                    <InputNumber min={75000} max={150000} onChange={handleChangeInputNumber} />
                    <span>VNĐ</span>
                </Form.Item>

                <Form.Item label="Chức năng" >
                    <Button type="primary" htmlType="submit" style={{ width: 135 }}> Tạo lịch chiếu </Button>
                </Form.Item>

            </Form>
        </div>
    )
}