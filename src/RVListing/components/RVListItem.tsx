import React from "react"
import { RVProps } from "../../api/searchAPI"
import './RVListItem.css'

interface RVListItemProps {
  rv: RVProps,
  className?: string;
}

export const RVListItem: React.FC<RVListItemProps> = ({rv, className, ...rest}) => {

  return (
    <div className={`rv-list-item ${className}`} {...rest}>
      <div className="rv-list-item-image-container">
        <img src={rv.primaryImageUrl} className="rv-list-item-image"/>
      </div>
      
      <div className="rv-list-item-name">{rv.name}</div>
    </div>
  )
}