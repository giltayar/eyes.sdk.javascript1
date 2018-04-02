'use strict';

class ScaleProviderFactory {
  /**
   * Abstraction for instantiating scale providers.
   *
   * @param {PropertyHandler} scaleProviderHandler A handler to update once a {@link ScaleProvider} instance is created.
   */
  constructor(scaleProviderHandler) {
    this._scaleProviderHandler = scaleProviderHandler;
  }

  /**
   * The main API for this factory.
   *
   * @param {int} imageToScaleWidth The width of the image to scale. This parameter CAN be by class implementing the
   *   factory, but this is not mandatory.
   * @return {ScaleProvider} A {@link ScaleProvider} instance.
   */
  getScaleProvider(imageToScaleWidth) {
    const scaleProvider = this.getScaleProviderImpl(imageToScaleWidth);
    this._scaleProviderHandler.set(scaleProvider);
    return scaleProvider;
  }

  // noinspection JSMethodCanBeStatic, JSUnusedLocalSymbols
  /**
   * The implementation of getting/creating the scale provider, should be implemented by child classes.
   *
   * @param {int} imageToScaleWidth The width of the image to scale. This parameter CAN be by class implementing the
   *   factory, but this is not mandatory.
   * @return {ScaleProvider} The scale provider to be used.
   */
  getScaleProviderImpl(imageToScaleWidth) {
    throw new Error('The method `getScaleProviderImpl` from `ScaleProviderFactory` should be implemented!');
  }
}

exports.ScaleProviderFactory = ScaleProviderFactory;