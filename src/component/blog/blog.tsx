import { Row, Col, Typography, Image, Flex } from "antd";

const { Paragraph, Text, Title } = Typography;

const Blog = () => {
    const text = `จังหวัดตราด ที่มีประวัติอันยาวนาน ที่เที่ยวทะเลใกล้กรุงเทพฯ
    เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน
    เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว!
    ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? Wongnai Travel
    บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล
    หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ
    ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค
    ล่องเรือมาด ชมธรรมชาติป่าชายเลน ขี่ช้างท่องป่า
    ตื่นเต้นกับการผจญภัยเหนือยอดไม้
    ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง
    และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม
    นอนหลับ เที่ยวสนุกแน่นอน`;
    return (
        <Row>
            <Col xs={24} sm={6} md={6} lg={8} xl={8}>
                <Image
                    preview={false}
                    src="https://img.wongnai.com/p/800x0/2019/07/02/1b13de2267824701958e32ca0b800da2.jpg"
                    alt="image"
                    style={{ borderRadius: 12, width: "100%", height: "295px", objectFit: "cover" }}
                />
            </Col>
            <Col xs={24} sm={18} md={18} lg={16} xl={16} style={{ paddingLeft: 8 }}>
                <Row>
                    <Col sm={24} md={24} lg={24} xl={24}>
                        <Title level={3} style={{ textAlign: "left" }}>
                            คู่มือเที่ยว เกาะช้าง กิน เที่ยว พักที่ไหนดี อ่านจบครบที่เดียว!
                        </Title>
                    </Col>
                    <Col sm={24} md={24} lg={24} xl={24}>
                        <Paragraph
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textAlign: "left",
                            }}
                        >
                            {`${text.split(" ").slice(0, 20).join(" ")}...`}

                            <Text
                                style={{ color: "blue", cursor: "pointer", marginLeft: 5 }}
                                onClick={() => {
                                    alert("More clicked!");
                                }}
                            >
                                อ่านต่อ
                            </Text>
                        </Paragraph>
                    </Col>
                    <Col xs={0} sm={24} md={24} lg={24} xl={24}>
                        <Flex gap="large" >
                            <Image
                                preview={false}
                                src="https://img.wongnai.com/p/800x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                                alt="image"
                                style={{ borderRadius: 12 }}
                            />

                            <Image
                                preview={false}
                                src="https://img.wongnai.com/p/800x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                                alt="image"
                                style={{ borderRadius: 12 }}
                            />
                            <Image
                                preview={false}
                                src="https://img.wongnai.com/p/800x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                                alt="image"
                                style={{ borderRadius: 12 }}
                            />
                        </Flex>
                    </Col>
                </Row>
            </Col>

        </Row>
    );
};

export default Blog;
