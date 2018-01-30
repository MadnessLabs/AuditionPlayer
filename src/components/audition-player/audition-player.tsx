import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'audition-player',
  styleUrl: 'audition-player.scss'
})
export class AuditionPlayer {
  @Element() auditionPlayerEl: HTMLElement;
  @Prop() src: string;

  playAudition(event) {
    var audioEl: HTMLAudioElement = this.auditionPlayerEl.querySelector('audio');
    var buttonEl: HTMLElement = this.auditionPlayerEl.querySelector('button');
    var isPaused = buttonEl.classList.contains('paused');

    isPaused ? buttonEl.classList.remove('paused') : buttonEl.classList.add('paused');
    isPaused ? audioEl.pause() : audioEl.play();
  }

  render() {
    return (
      <a onClick={(event: UIEvent) => this.playAudition(event)}>
        <button></button>
        <audio>
          <source src={this.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </a>
    );
  }
}
