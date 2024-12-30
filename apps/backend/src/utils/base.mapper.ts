export default interface BaseMapper<TSource, TDestination> {
    mapTo(source: TSource): TDestination;
    mapFrom(destination: TDestination): TSource;
}