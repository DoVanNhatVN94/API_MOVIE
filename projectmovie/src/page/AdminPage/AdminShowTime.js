import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Cascader, DatePicker, InputNumber, Select } from 'antd';
import manager from '../../API/API';
import { Formik, useFormik } from 'formik';
import moment from 'moment';

export default function AdminShowTime(props) {

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    });
    console.log(state.heThongRapChieu);
  
    useEffect(() => {

        async function fetchMyAPI() {
            let result = await manager.layDanhSachHeThongRap();
            setState({
                ...state,
                heThongRapChieu: result.data.content
            })
        }
        fetchMyAPI()

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

    const handleChangeHeThongRap = (value) => {

    }

    const onOk = (value) => {

    }

    const onChangeDate = (value) => {

    }

    const handleChangeInputNumber = (value) => {

    }

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h2>Tạo lịch chiếu</h2>

                <Form.Item label="Hệ thống rạp" >
                    <Cascader options={[{ label: 'AAA', value: 'aaa' }, { label: 'BBB', value: 'bbb' }]} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                </Form.Item>

                <Form.Item label="Cụm rạp" >
                    <Cascader options={[{ label: 'AAA', value: 'aaa' }, { label: 'BBB', value: 'bbb' }]} onChange={handleChangeHeThongRap} placeholder="Chọn cụm rạp" />
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



























// export default function AdminShowTime(props) {

//   const formik = useFormik({
//     initialValues: {
//       maPhim: props.match.params.id,
//       ngayChieuGioChieu: '',
//       maRap: '',
//       giaVe: ''
//     },
//     onSubmit: (value) => {
//       console.log(value)
//     }
//   })

//   const [state, setState] = useState({
//     heThongRapChieu: [],
//     cumRapChieu: []
//   });
//   console.log(state.heThongRapChieu);

//   useEffect(async () => {
//     try {
//       let result = await manager.layThongTinhHeThongRap();

//       setState({
//         ...state,
//         heThongRapChieu: result.data.content
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }, []);

//   const handleChangeHTR = async (value) => {
//     console.log(value);
//     try {
//       let result = await manager.layThongTinCumRap(value);

//       setState({
//         ...state,
//         cumRapChieu: result.data.content
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const handleChangeCumRap = (value) => {
//     formik.setFieldValue(value)
//   }

//   const onChangeDate = (value) => {
//     formik.setFieldValue(moment(value).format('DD/MM/YYYY hh:mm:ss'));
//     console.log(moment(value).format('DD/MM/YYYY hh:mm:ss'));
//   }

//   const onOk = (value) => {
//     formik.setFieldValue(moment(value).format('DD/MM/YYYY hh:mm:ss'));
//     console.log(moment(value).format('DD/MM/YYYY hh:mm:ss'));
//   }

//   const onChangeGiaVe = (value) => {
//     formik.setFieldValue(value)
//   }

//   const convertSelectHTR = () => {
//     // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.maHeThongRap }))
//     return state.heThongRapChieu?.map((htr, index) => {
//       return { label: htr.tenHeThongRap, value: htr.maHeThongRap }
//     })
//   }

//   return (
//     <div className="container">
//       <Form
//         name="basic"
//         onSubmitCapture={formik.handleSubmit}
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         autoComplete="off"
//       >
//         <h2>Tạo lịch chiếu</h2>
//         <Form.Item label="Hệ thống rạp">
//           <Select style={{ width: 500 }} options={convertSelectHTR()} onChange={handleChangeHTR} placeholder="Chọn hệ thống rạp" />
//         </Form.Item>
//         <Form.Item label="Cụm rạp">
//           <Select style={{ width: 500 }} options={state.cumRapChieu?.map((cumRap, index) => ({ label: cumRap.tenCumRap, value: cumRap.maCumRap }))} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />
//         </Form.Item>
//         <Form.Item label="Ngày chiếu, giờ chiếu">
//           <DatePicker format={'DD/MM/YYYY hh:mm:ss'} showTime onChange={onChangeDate} onOk={onOk} />
//         </Form.Item>
//         <Form.Item label="Giá vé">
//           <InputNumber min={75000} max={150000} onChange={onChangeGiaVe} />
//           <span>VNĐ</span>
//         </Form.Item>
//         <Form.Item label="Chức năng">
//           <Button htmlType='submit' type="primary" style={{ width: 150 }}>Tạo lịch chiếu</Button>
//         </Form.Item>
//       </Form>
//     </div>
//   )
// }
