import { AvatarList, CardComponent, CustomChart, CustomTable, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
  const mockListData = [
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.56)
    },
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(7890.12)
    },
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3456.78)
    }
  ]

  const mockTableData = {
    headers: ['Nome', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@email.com</span>,
        <button>ACTION</button>,
      ],
    ]
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
            data={[65, 59, 80, 81, 56, 55, 80, 70, 60, 75, 90, 100]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
