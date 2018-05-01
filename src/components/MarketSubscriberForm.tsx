import React from 'react';
import { Button, Form, Icon, Input, Modal } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { MarketText } from '@styledComponents';

const FormItem = Form.Item;

/**
 * Simple subscription form to subscriping to different GetResponse Lists.
 * Just specify the campaignToken for the list and it should work out of the box
 *
 */

const style = {
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  display: 'flex',
  flexDirection: 'column',
  height: '25rem',
  justifyContent: 'space-evenly',
  padding: '1.2rem'
};

export const SubscriptionPopUp = ({ form, onCancel, visible }) => (
  <Modal
    bodyStyle={style}
    visible={visible}
    footer={null}
    width="20rem"
    onCancel={onCancel}
  >
    <Form
      action="https://marketprotocol.us17.list-manage.com/subscribe/post"
      onSubmit={e => {
        form.validateFields((errors, _) => {
          if (errors) {
            e.preventDefault();
          }
        });
      }}
      acceptCharset="utf-8"
      method="post"
    >
      <input type="hidden" name="u" value="ef1f265a21b4aae9002084ee3" />
      <input type="hidden" name="id" value="491f750dec" />{' '}
      {/* <input type="text" name="MERGE1" id="MERGE1" /> */}{' '}
      <FormItem>
        {form.getFieldDecorator('firstName', {
          rules: [
            {
              message: 'Please input your first name!',
              required: true
            }
          ]
        })(
          <Input
            name="MERGE1"
            type="text"
            placeholder="First name"
            style={{
              backgroundColor: '#f6f6f6'
            }}
          />
        )}
      </FormItem>
      <FormItem>
        {form.getFieldDecorator('lastName', {
          rules: [
            {
              message: 'Please input your last name!',
              required: true
            }
          ]
        })(
          <Input
            name="MERGE2"
            type="text"
            placeholder="Last name"
            style={{
              backgroundColor: '#f6f6f6'
            }}
          />
        )}
      </FormItem>
      <FormItem>
        {form.getFieldDecorator('email', {
          rules: [
            {
              message: 'Please input an Email!',
              required: true
            },
            {
              message: 'Please input a correct Email',
              type: 'email'
            }
          ]
        })(
          <Input
            name="MERGE0"
            placeholder="Your email"
            style={{
              backgroundColor: '#f6f6f6'
            }}
          />
        )}
      </FormItem>
      <Button
        type="primary"
        htmlType="submit"
        style={{
          textAlign: 'center',
          width: '6rem'
        }}
      >
        Submit
      </Button>
    </Form>
    {/* These are the field name for these parameters in mailchimp */}
    {/* <input type="text" name="MERGE1" id="MERGE1" /> */} {/*First Name*/}
    {/* <input type="text" name="MERGE2" id="MERGE2" /> */} {/*Last Name*/}
  </Modal>
);

const WrappedForm = Form.create()(SubscriptionPopUp);

export default WrappedForm;
