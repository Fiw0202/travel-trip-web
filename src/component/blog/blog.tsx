import { Row, Col, Typography, Image, Flex, Input } from "antd";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const { Paragraph, Text, Title } = Typography;

interface ITripData {
    title: string,
    eid: number,
    url: string,
    description: string,
    photos: string[],
    tags: string[],
    id: string
}

const Blog = () => {



    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    console.log("param", params)
    const queryKeyword = params.get("keyword") || "";
    console.log("query", queryKeyword)

    const [data, setData] = useState<Array<ITripData>>([]);
    const [keyword, setKeyword] = useState<string>(queryKeyword);
    const getTrip = () => {
        axios
            .get(`http://localhost:8000/api/trips?keyword=${keyword}`)
            .then((res) => setData(res.data.trips))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        setKeyword(queryKeyword);
    }, [location.search]);

    useEffect(() => {
        if (keyword) {
            navigate(`/?keyword=${keyword}`);
        } else {
            navigate("/");
        }
        getTrip();
    }, [keyword]);

    return (
        <>
            <Input placeholder="หาที่เที่ยวเเล้วไปกัน" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            {data && data?.map((m) => {
                return (
                    <Row key={m.eid} style={{ paddingBottom: 32 }}>
                        <Col xs={24} sm={6} md={6} lg={8} xl={8} style={{ alignContent: "end" }}>
                            <Image
                                preview={false}
                                src={m.photos?.[0]}
                                alt="image"
                                style={{ borderRadius: 12, width: "100%", height: "295px", objectFit: "cover" }}
                            />
                        </Col>
                        <Col xs={24} sm={18} md={18} lg={16} xl={16} style={{ paddingLeft: 8, display: "flex" }}>
                            <Row justify="space-between" align="middle">
                                <Col sm={24} md={24} lg={24} xl={24}>
                                    <Title level={3} style={{ textAlign: "left", cursor: "pointer" }} onClick={() => window.open(
                                        m.url,
                                        '_blank'
                                    )}>
                                        {m.title}
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
                                        {`${m.description.split(" ").slice(0, 20).join(" ")}...`}

                                        <Text
                                            style={{ color: "blue", cursor: "pointer", marginLeft: 5 }}
                                            onClick={() => window.open(
                                                m.url,
                                                '_blank'
                                            )}
                                        >
                                            อ่านต่อ
                                        </Text>
                                    </Paragraph>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2} style={{ textAlign: "start" }}>
                                            <Text style={{ color: "grey" }}>หมวด: </Text>
                                        </Col>
                                        <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                                            <Flex gap="small">
                                                {m?.tags?.map((tag, index) => (
                                                    <React.Fragment key={index}>
                                                        <Text
                                                            style={{
                                                                color: "grey",
                                                                fontWeight: "bold",
                                                                textDecorationLine: "underline",
                                                            }}
                                                            onClick={() => setKeyword(tag)}
                                                        >
                                                            {tag}
                                                        </Text>
                                                        {index === m.tags.length - 2 && m.tags.length > 1 && (
                                                            <Text style={{
                                                                color: "grey",
                                                                fontWeight: "bold",
                                                                textDecorationLine: "underline",
                                                            }}> และ </Text>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </Flex>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col xs={0} sm={24} md={24} lg={24} xl={24}>
                                    <Flex gap="large">
                                        {m?.photos?.slice(1).map((photo, index) => (
                                            <Image
                                                key={index}
                                                preview={false}
                                                src={photo}
                                                alt="image"
                                                style={{ borderRadius: 12 }}
                                            />
                                        ))}
                                    </Flex>
                                </Col>
                            </Row>
                        </Col >

                    </Row >
                )

            })}
        </>
    );
};

export default Blog;
