import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as React from 'react';
import { UploadChangeParam } from 'antd/lib/upload';

interface props {
	onChange: (info: UploadChangeParam) => void;
}

const InputFile = ({ onChange }: props) => {
	return (
		<Upload onChange={onChange}>
			<Button icon={<UploadOutlined />}>Click to Upload</Button>
		</Upload>
	);
};

export default InputFile;
