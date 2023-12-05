import { PointerEventsCheckLevel, userEvent } from '@testing-library/user-event'

export const user = userEvent.setup({
  pointerEventsCheck: PointerEventsCheckLevel.Never,
})
