export const setViewPort = async (page, querySelector)=>{
    const currentViewport= page.viewportSize()
    const pixelsNotInView = await page.evaluate(({ querySelector, currentViewport })=>{
      const content = document.querySelector(querySelector)
      return  content.scrollHeight - content.clientHeight+ currentViewport.height
    }, { querySelector, currentViewport })
    await page.setViewportSize({
      width: currentViewport.width,
      height:  pixelsNotInView
    })
  }
  
export const resetViewPort = async (page)=>{
    await page.setViewportSize({ width: 1536, height: 730 })
}
