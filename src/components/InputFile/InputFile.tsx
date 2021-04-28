import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import * as React from 'react';

const InputFile = () => (
	<Upload>
		<Button icon={<UploadOutlined />}>Click to Upload</Button>
	</Upload>
);
