class OrkFactory implements GameObjectFactory{

    public createObject():Ork {
        return new Ork()
    }
}