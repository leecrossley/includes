describe("includes", function() {

    it("should get an include tag from a supplied src", function() {
        var src = "<html><body><include>test.html</include></body></html>";

        includes.setSrc(src);
        var tag = includes.getTag();

        expect(tag).not.toBeUndefined();
        expect(tag).not.toBeNull();
        expect(tag.start).toEqual(12);
        expect(tag.end).toEqual(30);
        expect(tag.inner).toEqual("test.html");
    });

    it("shouldn't get an include tag if one doesn't exist", function() {
        var src = "<html><body>Nothing to see here</body></html>";

        includes.setSrc(src);
        var tag = includes.getTag();

        expect(tag).toBeUndefined();
    });

}); 