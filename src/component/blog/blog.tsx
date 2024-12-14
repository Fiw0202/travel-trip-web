import { Row, Col, Typography } from 'antd'
import React from 'react'

const { Paragraph, Text, Title } = Typography

const Blog = () => {

    return (
        <Row style={{ border: "1px solid green", padding: 10 }}>
            <Col xs={4} sm={6} md={6} lg={8} xl={8} style={{ border: "1px solid red" }}>
                <Text>xxx</Text>
            </Col>
            <Col xs={20} sm={18} md={18} lg={16} xl={16} style={{ border: "1px solid blue" }}>
                <Row>
                    <Col sm={24} md={24} lg={24} xl={24} style={{ border: "1px solid red" }}>
                        <Title level={3}>xxx</Title>
                    </Col>
                    <Col sm={24} md={24} lg={24} xl={24} style={{ border: "1px solid red" }}>
                        <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }} onClick={(e) => {
                            const target = e.target as HTMLElement;
                            if (target.innerText === "more") {
                                alert("More clicked!");
                            }
                        }}>จังหวัดตราด ที่มีประวัติอันยาวนาน ที่เที่ยวทะเลใกล้กรุงเทพฯ เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว! ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? Wongnai Travel บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค ล่องเรือมาด ชมธรรมชาติป่าชายเลน ขี่ช้างท่องป่า ตื่นเต้นกับการผจญภัยเหนือยอดไม้ ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม นอนหลับ เที่ยวสนุกแน่นอน</Paragraph>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}

export default Blog