import {
  Button,
  Container,
  Description,
  InputBox,
  InputTokenSelectAddon,
  Layout,
  NumberInput,
  Panel,
  PositionAccordion,
  RefreshButton,
  Grid,
  Text,
  TokenPairSelect
} from "../src";
import PageSidebar from "./PageSidebar";
import PageMainNavigationBar from "./PageMainNavigationBar";

export default {
  title: "Page Examples/Margin Trading",
  parameters: { options: { showPanel: false } }
};

const positionsList = [
  {
    id: 1,
    tokenPair: "USDT / ETH",
    position: "152.01 ETH",
    leverage: 3,
    riskLevel: {
      value: "150%",
      color: "red"
    },
    liquidityPrice: "1 ETH = 1,789 USDT"
  },
  {
    id: 2,
    tokenPair: "USDT / WBTC",
    position: "152.01 ETH",
    leverage: 3,
    riskLevel: {
      value: "150%",
      color: "green"
    },
    liquidityPrice: "1 ETH = 1,789 WBTC"
  }
];

const tokenList = ["ETH", "USDT", "WBDC"];

export const Default = (): JSX.Element => (
  <Layout>
    <Layout.Sidebar>
      <PageSidebar />
    </Layout.Sidebar>
    <Layout.Main>
      <Container>
        <PageMainNavigationBar />
        <Text font="serif" variant="h1" color="textPrimary">
          Margin Trading
        </Text>
        <Container.Row>
          <Grid position="primary">
            <Panel>
              <TokenPairSelect
                defaultTokenA="ETH"
                defaultTokenB="USDT"
                tokenList={["ETH", "USDT", "WBTC", "XXX1", "XXX2", "XXX3"]}
                onChange={(value) => console.log(value)}
              />
              <Text variant="h2" color="textPrimary">
                618.27 USDT
              </Text>
              <Text variant="large" font="sans" color="textPrimary">
                -0.051 USDT (
                <Text variant="span" color="red">
                  -1.33%
                </Text>
                ) Past 24 Hours
              </Text>
            </Panel>
          </Grid>
          <Grid position="secondary">
            <Panel compact>
              <Text align="right">
                1 ETH = 1,271 USDT
                <RefreshButton onClick={() => console.log("refresh button clicked")} />
              </Text>
              <InputBox
                description="Your balance: 9,999 USDT"
                defaultValue={0}
                onChange={(value) => console.log(value)}
                AddonComponent={
                  <InputTokenSelectAddon
                    label="You Pay:"
                    defaultValue={tokenList[0]}
                    tokenList={tokenList}
                    onChange={(value) => console.log(value)}
                  />
                }
              />
              <Description
                name="Leverage"
                DetailComponent={
                  <NumberInput
                    defaultValue={1.5}
                    minValue={1}
                    maxValue={10}
                    step={0.1}
                    unit="%"
                    onChange={(value) => console.log(value)}
                  />
                }
              />
              <InputBox
                description="Collateral: 100, Credit: 200"
                defaultValue={0}
                onChange={(value) => console.log(value)}
                AddonComponent={
                  <InputTokenSelectAddon
                    label="Your position:"
                    defaultValue={tokenList[0]}
                    tokenList={tokenList}
                    onChange={(value) => console.log(value)}
                  />
                }
              />
              <Description
                name="Slippage Tolerance"
                DetailComponent={
                  <NumberInput
                    defaultValue={1.5}
                    minValue={1}
                    maxValue={10}
                    step={0.1}
                    unit="%"
                    onChange={(value) => console.log(value)}
                  />
                }
              />
              <Description name="Tranding Fee" detail="0.2%" />
              <Description name="Liquidation Price" detail="1 ETH = 1,789 USDT" />
              <Description name="Hourly Interest Rate" detail="1.123% (90 USDT)" />
              <Button color="green" size="large" fluid>
                Leverage
              </Button>
            </Panel>
            <Panel compact>
              <Text variant="h3" color="textPrimary">
                Your Position:
              </Text>
              <PositionAccordion
                positionsList={positionsList}
                onAddPositionButtonClick={(i) => console.log(i.tokenPair)}
                onClosePositionButtonClick={(i) => console.log(i.tokenPair)}
              />
            </Panel>
          </Grid>
        </Container.Row>
      </Container>
    </Layout.Main>
  </Layout>
);
