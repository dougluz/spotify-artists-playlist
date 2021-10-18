import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'
import Button from '../Button.vue'

describe('Button tests', () => {
  it('should display the button whitout any props', () => {
    const { container } = render(Button)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button with the correct label when received through props', async () => {
    const { findByRole } = render(Button, { props: { label: 'Login' } })
    const button = await findByRole('button', { name: /login/i })
    expect(button).toBeInTheDocument()
  })

  it('should call onClick prop when the button is clicked', async () => {
    const onClick = jest.fn()
    const { findByRole } = render(Button, { props: { onClick } })
    const button = await findByRole('button', { name: /click/i })
    fireEvent.click(button)

    expect(onClick).toBeCalledTimes(1)
  })

  it('should be disabled when receiving disabled prop', async () => {
    const { findByRole } = render(Button, { props: { disabled: true } })
    const button = await findByRole('button', { name: /click/i })
    expect(button).toBeDisabled()
  })
})