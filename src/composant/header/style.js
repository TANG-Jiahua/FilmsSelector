import styled from 'styled-components';
import logoPic from '../../statics/logo.jpg';
import { Button } from 'antd';
export const HeaderWrapper = styled.div`
	height:60px;
	background:#E6E6FA; 
	margin-bottom:10px;
`;

export const Logo = styled.div`
	float:left;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const SearchWrapper = styled.div`
	float:left;
	margin-left : 30px;
	margin-top:15px;
	font-size:18px;
	
`;


export const NavSearch = styled.input.attrs({
	placeholder: 'Search'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 15px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 24px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Contact= styled.div`
    float: right;
    background:yello;
	padding: 0 30px;
	margin-top: 15px;

`;

