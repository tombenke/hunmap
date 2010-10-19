function( doc )
{
    if( doc.type == 'county' )
    {
        emit( doc.name, {"county_id": doc.county_id, "name": doc.name } );
    }
}