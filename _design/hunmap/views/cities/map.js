function( doc )
{
    if( doc.type == 'city' )
    {
        emit( [doc.county_id, doc.name], {"city_id": doc.city_id, "name": doc.name, "county_id": doc.county_id } );

    }
}