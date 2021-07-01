
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageTrafficTable, PageVisitsTable } from "../../components/Tables";


export default () => {
  return (
    <>
      <br></br>
      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={9} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageTrafficTable />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={3}>
              <Row>
                <Col xs={12} className="mb-4">
                  <CircleChartWidget title="Alerts" data={[{ label: "a", value: 10 }, { label: "a", value: 10 }, { label: "a", value: 10 }, { label: "a", value: 10 }]} ></CircleChartWidget>

                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
