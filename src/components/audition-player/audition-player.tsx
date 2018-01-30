import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'audition-player',
  styleUrl: 'audition-player.scss',
  shadow: true
})
export class AuditionPlayer {
  @Element() auditionPlayerEl: HTMLElement;
  @Prop() src: string;

  playAudition(event) {
    console.dir(this.auditionPlayerEl);
    var audioEl: HTMLAudioElement = this.auditionPlayerEl.querySelector('audio');
    console.log(audioEl);
    audioEl.play();
  }

  render() {
    return (
      <a onClick={(event: UIEvent) => this.playAudition(event)}>
        <button class='button'></button>
        <audio>
          <source src={this.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </a>
    );
  }
}
