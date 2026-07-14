import {useState} from "react";
import axios from "axios";
import {Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";

const Test = () => {
    const [data, setData] = useState(null); // 데이터 상태
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    const [siteName, setSiteName] = useState("site_a");
    const [inType, setInType] = useState("query");
    const [userInput, setUserInput] = useState('영상 재생');

    const placeList = [
        {site: "site_a"},
        {site: "site_b"},
        {site: "site_c"},
    ];
    const inTypeList = [
        {site: "query"},
        {site: "param"},
    ];


    return (
        <Container maxWidth="sm">

        </Container>
    );
};

export default Test;
