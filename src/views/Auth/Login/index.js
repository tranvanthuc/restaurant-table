import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Card,
} from 'antd';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};

const { Title } = Typography;

const Index = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      align="middle"
      justify="center"
      className="h-100vh"
      style={{ backgroundColor: '#efefef' }}
    >
      <Col span={9}>
        <Card>
          <Title className="text-center" level={3}>
            Login
          </Title>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button className="ml-1" htmlType="button">
                Clear
              </Button>
            </Form.Item>

            <div className="text-end fw-light">
              <Button className=" pa-0 fw-bold" type="link">
                Forgot password?
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Index;
