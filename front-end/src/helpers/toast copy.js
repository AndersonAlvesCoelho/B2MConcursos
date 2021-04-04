import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import Toast from 'react-bootstrap/Toast';
import { connect } from 'react-redux';
import * as toastActions from '../actions/toast.actions';
// import MaterialIcon from "material-icons-react";

const Toast1 = (props) => {
  const {
    hide,
  } = props;

  const [show, setShow] = useState(false);

  React.useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Row>
      <Col xs={6}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Toast
            className={props.status}
            onClose={() => hide()}
            show={show}
            autohide={false}
          >
            {props.title !== '' && (
              <Toast.Header className={props.status}>
                <strong className="mr-auto">{props.title}</strong>
              </Toast.Header>
            )}
            <Toast.Body>{props.message}</Toast.Body>
          </Toast>
        </div>
      </Col>
    </Row>
  );
};

Toast1.defaultProps = {
  show: true,
  status: 'success',
};

const mapDispatchToProps = {
  hide: toastActions.hide,
};

export default connect('', mapDispatchToProps)(Toast1);
