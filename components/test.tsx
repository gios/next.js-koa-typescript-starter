import React, { Component } from 'react'

export default class Test extends Component {
  private editorRef = React.createRef<any>()

  public render() {
    return (
      <div>
        AMIGOS
        <div ref={this.editorRef}></div>
      </div>
    )
  }

  public async componentDidMount () {
    await this.initQuill()
  }

  private async initQuill () {
    const Quill = await import('quill')
    const editor = new Quill.default(this.editorRef.current)
    console.log("AAA ", editor)
  }
}