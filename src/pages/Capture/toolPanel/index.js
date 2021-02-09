import React from 'react'
import './style.scss'
// import components
import ToolBox from '../toolBox'

const ToolPanel = () => {
  const viewTool = [[
    {
      name: 'desktop',
      text: 'Desktop',
      action: {
        type: 'VIEW_DESKTOP'
      }
    },
    {
      name: 'mobile',
      text: 'Mobile',
      action: {
        type: 'VIEW_MOBILE'
      }
    },
    {
      name: 'code',
      text: 'Code',
      action: {
        type: 'VIEW_CODE'
      }
    },
    {
      name: 'info',
      text: 'Info',
      action: {
        type: 'VIEW_INFO'
      }
    }
  ]]
  // const viewTool = [
  //   {
  //     name: 'desktop',
  //     text: 'Desktop',
  //     action: {
  //       type: 'VIEW_DESKTOP'
  //     }
  //   },
  //   {
  //     name: 'mobile',
  //     text: 'Mobile',
  //     action: {
  //       type: 'VIEW_MOBILE'
  //     }
  //   },
  //   {
  //     name: 'code',
  //     text: 'Code',
  //     action: {
  //       type: 'VIEW_CODE'
  //     }
  //   },
  //   {
  //     name: 'info',
  //     text: 'Info',
  //     action: {
  //       type: 'VIEW_INFO'
  //     }
  //   }
  // ]
  const annotationTools = [
    [
      {
        name: 'pin_comment',
        text: 'Pin Comment',
        icon: 'fas fa-plus-circle',
        action: {
          type: 'PIN_COMMENT'
        }
      },
      {
        name: 'draw_box',
        text: 'Draw Box',
        icon: 'fas fa-plus-square',
        action: {
          type: 'DRAW_BOX'
        }
      },
      {
        name: 'add_markup',
        text: 'Add Markup',
        icon: 'fas fa-highlighter',
        action: {
          type: 'ADD_MARKUP'
        }
      },
      {
        name: 'measure_it',
        text: 'Measure it!',
        icon: 'fas fa-ruler',
        action: {
          type: 'MEASURE_IT'
        }
      },
    ],
    [
      {
        name: 'download',
        text: 'Download',
        icon: 'fas fa-arrow-down',
        action: {
          type: 'DOWNLOAD'
        }
      },
      {
        name: 'add_to_folder',
        text: 'Add to Folder',
        icon: 'fas fa-folder-plus',
        action: {
          type: 'ADD_TO_FOLDER'
        }
      },
      {
        name: 'delete',
        text: 'Delete',
        icon: 'fas fa-trash-alt',
        action: {
          type: 'DELETE'
        }
      },
    ]
  ]
 
  return (
    <div className="tool-panel">
      <div className="tool-panel__box">
        <ToolBox toolGroups={ viewTool } className="tool-panel__box" />
      </div>
      <div className="tool-panel__box">
        <ToolBox toolGroups={ annotationTools } className="tool-panel__box" />
      </div>
      
      {/* <ToolGroup tools={tg}/> */}
      {/* <ViewBox tools={ viewTool } /> */}
    </div>
  )
}

export default ToolPanel
