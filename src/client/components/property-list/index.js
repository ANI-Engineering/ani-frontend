
import propertyList from '../../propertList'
import './property-list.css'
import PropertyCard from './PropertyCard'

function PropertyList() {
  return (
    <div className='property-list'>
      {propertyList.map(({ imageUrl, propertyName, propertyType, propertyLocation, propertyRatings, propertyPrice }) => (
        <PropertyCard
          imageUrl={imageUrl} 
          propertyName={propertyName}
          propertyType={propertyType}
          propertyLocation={propertyLocation}
          propertyRatings={propertyRatings}
          propertyPrice={propertyPrice}
        />
      ))}
    </div>
    )
}

export default PropertyList