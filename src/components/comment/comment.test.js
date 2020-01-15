import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import Comment from './index.js'

afterEach(cleanup);

it('fetches and displays comment', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: {
        "by" : "norvig",
        "id" : 2921983,
        "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
        "parent" : 2921506,
        "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        "time" : 1314211127,
        "type" : "comment"
    }})

    const items = [{ text: 'norvig' }, {text: "Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?"}]
    const id = '2921983'

    //render component
    const { getByText, getByTestId } = render(<Comment commentId={id} />)
    //wait for Element to render
    await waitForElement(() => getByTestId("commentBy"));

    expect(axiosMock.get).toHaveBeenCalledTimes(8)
    expect(axiosMock.get).toHaveBeenCalledWith("https://hacker-news.firebaseio.com/v0/item/2921983.json")
    getByText(items[0].text)
    getByText(items[1].text)
  })